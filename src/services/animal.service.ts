import prisma from "../lib/prisma.js";

export async function getAllAnimals() {
    return prisma.animal.findMany();
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