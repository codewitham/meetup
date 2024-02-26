'use server';
import { revalidatePath } from "next/cache";
import prisma from "../db";
import { getUserById } from "./users.actions";

export async function createWebinar({ title, description, maxPersons, datetime, isPaid, thumbnail }: CreateWebinar) {
    try {
        const { user } = await getUserById();

        if (!user) {
            return { error: "user not defined!", user: user }
        }

        const newWebinar = await prisma.webinar.create({
            data: {
                title,
                description,
                maxPersons,
                datetime,
                isPaid,
                organizerId: user.id,
                thumbnail,
            },
        });

        revalidatePath("/")

        return { message: "Webinar Created!", webinar: newWebinar };
    } catch (error) {
        console.error(error);
        return { error: "Server Error!" };
    }
}

export async function getAllWebinars() {
    try {
        const allWebinars = await prisma.webinar.findMany({ include: { Join: { select: { userId: true } } }, orderBy: { datetime: "desc" } });

        return { webinars: allWebinars };
    } catch (error) {
        console.error(error);
        return { error: "Server Error!" };
    }
}

export async function getSingleWebinar(id: string) {
    try {
        const { user } = await getUserById();

        if (!user) {
            return { error: "user not defined!", user: user }
        }

        const webinar = await prisma.webinar.findUnique({ where: { id: id }, include: { Join: { select: { userId: true } } } });

        return { webinar: webinar };
    } catch (error) {
        console.error(error);
        return { error: "Server Error!" };
    }
}


