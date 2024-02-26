'use server';
import { revalidatePath } from "next/cache";
import prisma from "../db";
import { getUserById } from "./users.actions";

export async function JoinWebinar(id: string) {
    try {
        const { user } = await getUserById();

        if (!user) {
            return { error: "user not defined!", user: user }
        }

        const findExists = await prisma.join.findFirst({ where: { userId: user.id, webinarId: id } });
        if (findExists) {
            return { message: "You have already joined the seminar!", findExists: findExists };
        }

        const join = await prisma.join.create({ data: { userId: user?.id || "", webinarId: id } });

        revalidatePath("/");

        return { join: join, message: "joined to the webinar" };

    } catch (error) {
        console.error(error);
        return { error: "Server Error!" };
    }
}