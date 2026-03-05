import prisma from "../lib/prisma.js";

export async function getAllFosterHistoryRecords() {
  return prisma.foster_history.findMany({
    include: {
      user_foster_history_user_idTouser: true,
      user_foster_history_staff_idTouser: true,
    },
  });
}

export async function getFosterHistoryById(id: number) {
  return prisma.foster_history.findUnique({
    include: {
      user_foster_history_staff_idTouser: true,
      animal: true,
    },
    where: { foster_history_id: id },
  });
}
export async function getFosterHistoryByAnimalId(id: number) {
  return prisma.foster_history.findMany({
    include: {
      user_foster_history_user_idTouser: true,
      user_foster_history_staff_idTouser: true,
      animal: true,
    },
    where: { animal_id: id },
  });
}
export async function getFosterHistoryByUserId(id: number) {
  return prisma.foster_history.findMany({
    include: {
      user_foster_history_user_idTouser: true,
      user_foster_history_staff_idTouser: true,
      animal: true,
    },
    where: { user_id: id },
  });
}

export async function createFosterHistoryRecord(data: any) {
  const {
    foster_history_id,
    animal_display,
    animal,
    animal_id,
    user_id,
    staff_id,
    name,
    ...rest
  } = data;

  return prisma.foster_history.create({
    data: {
      ...rest,
      animal: {
        connect: { animal_id: animal_id },
      },
      user_foster_history_user_idTouser: {
        connect: { user_id: user_id },
      },
      user_foster_history_staff_idTouser: {
        connect: { user_id: staff_id },
      },
    },
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
