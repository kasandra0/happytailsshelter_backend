import prisma from "../lib/prisma.js";

export async function getAllIMedicalLog() {
    return prisma.medical_log.findMany();
}

export async function getMedicalLogById(id: number) {
    return prisma.medical_log.findUnique({
        where: { log_history_id: id },
    });
}

export async function createMedicalLog(data: any) {
    return prisma.medical_log.create({
        data,
    });
}

