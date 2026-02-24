import prisma from "../lib/prisma.js";

export async function getAllUsers() {
    return prisma.user.findMany();
}

export async function getUserById(id: bigint) {
    return prisma.user.findUnique({ where: { user_id: id } });
}

export async function getUserByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
}

export async function updateUser(id: bigint, data: any) {
    return prisma.user.update({ where: { user_id: id }, data });
}
