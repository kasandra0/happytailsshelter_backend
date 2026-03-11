import prisma from "../lib/prisma.js";

export async function getAllIMedicalLog() {
  return prisma.medical_log.findMany({ orderBy: { created_date: "desc" } });
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
  const { animal_id, user_id, animal_name, animal, user, ...rest } = data;
  return prisma.medical_log.update({
    where: { log_history_id: id },
    data: {
      ...rest,
      animal: {
        connect: { animal_id: animal_id },
      },
      user: {
        connect: { user_id: user_id },
      },
    },
  });
}

export async function deleteMedicalLog(id: number) {
  return prisma.medical_log.delete({
    where: { log_history_id: id },
  });
}

export async function getMedicalLogsByAnimalId(animalId: number) {
  return prisma.medical_log.findMany({
    where: { animal_id: animalId },
    include: { animal: true, user: true },
    orderBy: { created_date: "desc" },
  });
}
