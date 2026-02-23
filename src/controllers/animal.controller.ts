import type { Request, Response } from "express";
import * as animalService from "../services/animal.service.js";
import { successResponse } from "../utils/response.js";

export async function getAll(req: Request, res: Response) {
  const animals = await animalService.getAllAnimals();

  res.json(successResponse("Animals retrieved successfully", animals));
}

export async function getById(req: Request, res: Response) {
  const id = Number(req.params.id);

  const animal = await animalService.getAnimalById(id);

  if (!animal) {
    const error = new Error("Animal not found");
    (error as any).status = 404;
    throw error;
  }

  res.json(successResponse("Animal retrieved successfully", animal));
}

export async function create(req: Request, res: Response) {
  const animal = await animalService.createAnimal(req.body);

  res.status(201).json(successResponse("Animal created successfully", animal));
}

export async function updateAnimal(req: Request, res: Response) {
  const id = Number(req.params.id);

  const updatedAnimal = await animalService.updateAnimal(id, req.body);

  if (!updatedAnimal) {
    const error = new Error("Animal not found");
    (error as any).status = 404;
    throw error;
  }

  res.json(successResponse("Animal updated successfully", updatedAnimal));
}

export async function deleteAnimal(req: Request, res: Response) {
  const id = Number(req.params.id);

  await animalService.deleteAnimal(id);

  res.json(successResponse("Animal deleted successfully", id));
}
