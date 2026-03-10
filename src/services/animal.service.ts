import prisma from "../lib/prisma.js";

export async function getAllAnimals() {
  return prisma.animal.findMany({
    orderBy: {
      updated_at: "desc",
    },
  });
}

export async function getAnimalById(id: number) {
  return prisma.animal.findUnique({
    where: { animal_id: id },
  });
}

export async function createAnimal(data: any) {
  return prisma.animal.create({
    data,
  });
}

export async function updateAnimal(id: number, data: any) {
  return prisma.animal.update({
    where: {
      animal_id: id,
    },
    data: data,
  });
}

export const deleteAnimal = async (id: number) => {
  return prisma.animal.delete({
    where: { animal_id: id },
  });
};
