import prisma from "../lib/prisma.js";

export async function getAllFosterHistoryRecords() {
  return prisma.foster_history.findMany();
}

export async function getFosterHistoryById(id: number) {
  return prisma.foster_history.findUnique({
    where: { foster_history_id: id },
  });
}
export async function getFosterHistoryByAnimalId(id: number) {
  return prisma.foster_history.findMany({
    where: { animal_id: id },
  });
}
export async function getFosterHistoryByUserId(id: number) {
  return prisma.foster_history.findMany({
    where: { user_id: id },
  });
}

export async function createFosterHistoryRecord(data: any) {
  return prisma.foster_history.create({
    data,
  });
}

export async function updateFosterHistoryRecord(id: number, data: any) {
  return prisma.foster_history.update({
    where: { foster_history_id: id },
    data: data,
  });
}

export async function deleteFosterHistory(id: number) {
  return prisma.foster_history.delete({
    where: { foster_history_id: id },
  });
}
