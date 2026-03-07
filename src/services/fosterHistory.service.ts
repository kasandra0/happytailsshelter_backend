import prisma from "../lib/prisma.js";

export async function getAllFosterHistoryRecords() {
  return prisma.foster_history.findMany({
    include: {
      user_foster_history_user_idTouser: true,
      user_foster_history_staff_idTouser: true,
      animal: true,
    },
  });
}

export async function getFosterHistoryById(id: number) {
  return prisma.foster_history.findUnique({
    include: {
      user_foster_history_staff_idTouser: true,
      user_foster_history_user_idTouser: true,
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
    start_date,
    end_date,
    ...rest
  } = data;

  // check for overlapping records
  await validateNoOverlap(animal_id, start_date, end_date);

  return prisma.foster_history.create({
    data: {
      ...rest,
      start_date,
      end_date,
      animal: { connect: { animal_id } },
      user_foster_history_user_idTouser: { connect: { user_id } },
      user_foster_history_staff_idTouser: { connect: { user_id: staff_id } },
    },
  });
}

export async function updateFosterHistoryRecord(id: number, data: any) {
  const { animal_id, user_id, start_date, end_date, ...rest } = data;

  await validateNoOverlap(animal_id, start_date, end_date, id);

  return prisma.foster_history.update({
    where: { foster_history_id: id },
    data: {
      ...rest,
      start_date,
      end_date,
      animal: { connect: { animal_id } },
      user_foster_history_user_idTouser: { connect: { user_id } },
    },
  });
}

async function validateNoOverlap(
  animal_id: number,
  start_date: Date,
  end_date: Date | null,
  excludeId?: number
) {
  const overlapping = await prisma.foster_history.findFirst({
    where: {
      animal_id,
      // exclude the current record on update
      ...(excludeId ? { NOT: { foster_history_id: excludeId } } : {}),
      OR: [
        // new record starts during an existing record
        {
          start_date: { lte: new Date(start_date) },
          OR: [{ end_date: null }, { end_date: { gte: new Date(start_date) } }],
        },
        // new record ends during an existing record
        ...(end_date
          ? [
              {
                start_date: { lte: new Date(end_date) },
                OR: [
                  { end_date: null },
                  { end_date: { gte: new Date(end_date) } },
                ],
              },
            ]
          : []),
        // new record completely contains an existing record
        ...(end_date
          ? [
              {
                start_date: { gte: new Date(start_date) },
                end_date: { lte: new Date(end_date) },
              },
            ]
          : []),
      ],
    },
  });

  if (overlapping) {
    const fmt = (d: Date | null) =>
      d ? new Date(d).toLocaleDateString() : "present";
    throw new Error(
      `This animal already has a foster record from ${fmt(
        overlapping.start_date
      )} to ${fmt(overlapping.end_date)}. Dates cannot overlap.`
    );
  }
}

export async function deleteFosterHistory(id: number) {
  return prisma.foster_history.delete({
    where: { foster_history_id: id },
  });
}
