import prisma from "../lib/prisma.js";

export async function getAllIFosterHistory() {
    return prisma.foster_history.findMany();
}

export async function getFosterHistoryById(id: number) {
    return prisma.foster_history.findUnique({
        where: { foster_history_id: id },
    });
}

export async function createFosterHistory(data: any) {
    return prisma.foster_history.create({
        data,
    });
}

