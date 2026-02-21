import type { animalModel } from "../generated/prisma/models.js";
import prisma from "../lib/prisma.js";
import { RequestUtility } from "../utilities/requestUtility.js";

export const createAnimal = async (req: any, res: any) => {
  try {
    let animal: animalModel = req.body;

    if (!RequestUtility.canCreateAnimal(animal)) {
      throw new Error("Invalid Request");
    }

    const newAnimal = await prisma.animal.create({
      data: animal,
    });

    res.status(201).json(newAnimal);
  } catch (e: any) {
    console.error(e);
    res.status(400).json({ error: e.message });
  }
};

export const getAllAnimals = async (req: any, res: any) => {
  try {
    const allAnimals = await prisma.animal.findMany();
    res.json(allAnimals);
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch animals" });
  }
};

export const getAnimalById = async (req: any, res: any) => {
  try {
    const id = req.params.id as string;

    if (!RequestUtility.canSearchForRecord(id)) {
      throw new Error("Request Invalid");
    }

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
    console.error(e);
    res.status(400).json({ error: e.message });
  }
};

export const updateAnimal = async (req: any, res: any) => {
  try {
    const id = req.params.id;

    if (!RequestUtility.canSearchForRecord(id)) {
      throw new Error("Request Invalid");
    }

    const animal: animalModel = req.body;

    const updatedAnimal = await prisma.animal.update({
      where: {
        animal_id: Number(id),
      },
      data: animal,
    });
    res.status(200).json(updatedAnimal);
  } catch (e: any) {
    console.error(e);
    res.status(400).json({ error: e.message });
  }
};

export const deleteAnimal = async (req: any, res: any) => {
  try {
    const id = req.params.id;

    if (!RequestUtility.canSearchForRecord(id)) {
      throw new Error("Request Invalid");
    }
    await prisma.animal.delete({
      where: {
        animal_id: Number(id),
      },
    });

    res.status(200).json({
      wasSuccessful: true,
      message: "Animal deleted successfully",
      animalId: id,
    });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
};
