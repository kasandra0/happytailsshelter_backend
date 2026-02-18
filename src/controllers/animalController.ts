import type { animalModel } from "../generated/prisma/models.js";
import prisma from "../lib/prisma.js";

// GET all animals
export const getAllAnimals = async (req: any, res: any) => {
  try {
    const allAnimals = await prisma.animal.findMany();
    res.json(allAnimals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch animals" });
  }
};

export const getAnimalById = async (req: any, res: any) => {
  try {
    const id = req.params.id as string;
    const animal = await prisma.animal.findFirstOrThrow({
      where: {
        animal_id: Number(id),
      },
    });

    if (!animal) {
      return res.status(404).json({ error: "Animal not found" });
    }

    res.status(200).json(animal);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
};

export const createAnimal = async (req: any, res: any) => {
  try {
    const animal: animalModel = req.body;

    const newAnimal = await prisma.animal.create({
      data: animal,
    });

    res.status(201).json(newAnimal);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
};
