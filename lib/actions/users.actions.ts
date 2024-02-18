'use server';
import prisma from "../db";

export async function createUser(createUser: createUser) {
    try {
        const { email, clerkId, name, imageUrl } = createUser;
        const newUser = await prisma.user.create({ data: { email: email, clerkId: clerkId, name: name, imageUrl: imageUrl } });
        return { message: "user created!", user: newUser }
    } catch (error) {
        console.log(error);
        return { error: "server error!" }
    }
}

export async function updateUser(updateUser: updateUser) {
    try {
        const { id, name, imageUrl } = updateUser;
        const user = await prisma.user.update({ where: { clerkId: id }, data: { name: name, imageUrl: imageUrl } });
        return { message: "user updated!", user: user }
    } catch (error) {
        console.log(error);
        return { error: "server error!" }
    }
}

export async function deleteUser(id: string) {
    try {
        const user = await prisma.user.delete({ where: { clerkId: id } });
        return { message: "user deleted!!", user: user }
    } catch (error) {
        console.log(error);
        return { error: "server error!" }
    }
}

export async function getUserById(userId: string) {
    try {
        const user = await prisma.user.delete({ where: { clerkId: userId } });
        return { message: "user fetched!!", user: user }
    } catch (error) {
        console.log(error);
        return { error: "server error!" }
    }
}