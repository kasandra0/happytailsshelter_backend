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

export async function updateMedicalLog(id: number, data: any) {
  return prisma.medical_log.update({
    where: { log_history_id: id }, 
        data,
  });
}

export async function deleteMedicalLog(id: number) {
  return prisma.medical_log.delete({
    where: { log_history_id: id },
  });
}