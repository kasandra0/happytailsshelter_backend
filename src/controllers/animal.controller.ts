import type { Request, Response } from "express"
import * as animalService from "../services/animal.service.js"
import * as medicalLogService from "../services/medicallog.service.js"
import { successResponse } from "../utils/response.js"

export async function getAll(req: Request, res: Response) {
  const animals = await animalService.getAllAnimals()
  res.json(successResponse("Animals retrieved successfully", animals))
}

export async function getById(req: Request, res: Response) {
  const id = Number(req.params.id)

  const animal = await animalService.getAnimalById(id)

  if (!animal) {
    const error = new Error("Animal not found")
    ;(error as any).status = 404
    throw error
  }

  res.json(successResponse("Animal retrieved successfully", animal))
}

export async function create(req: Request, res: Response) {
  const animal = await animalService.createAnimal(req.body)
  res.status(201).json(successResponse("Animal created successfully", animal))
}

export async function updateAnimal(req: Request, res: Response) {
  const id = Number(req.params.id)

  const updatedAnimal = await animalService.updateAnimal(id, req.body)

  if (!updatedAnimal) {
    const error = new Error("Animal not found")
    ;(error as any).status = 404
    throw error
  }

  res.json(successResponse("Animal updated successfully", updatedAnimal))
}

export async function deleteAnimal(req: Request, res: Response) {
  const id = Number(req.params.id)

  await animalService.deleteAnimal(id)

  res.json(successResponse("Animal deleted successfully", id))
}

export async function getMedicalLogs(req: Request, res: Response) {
  const id = Number(req.params.id)

  if (Number.isNaN(id)) {
    const error = new Error("Invalid animal id")
    ;(error as any).status = 400
    throw error
  }

  const logs = await medicalLogService.getMedicalLogsByAnimalId(id)

  res.json(successResponse("Medical logs retrieved successfully", logs))
}

export async function createMedicalLog(req: Request, res: Response) {
  const id = Number(req.params.id)

  if (Number.isNaN(id)) {
    const error = new Error("Invalid animal id")
    ;(error as any).status = 400
    throw error
  }

  const { user_id, type, created_date, description, start_date, end_date } = req.body

  if (!created_date) {
    const error = new Error("created_date is required (YYYY-MM-DD)")
    ;(error as any).status = 400
    throw error
  }

  if (!user_id) {
    const error = new Error("user_id is required (until auth is wired)")
    ;(error as any).status = 400
    throw error
  }

  const newLog = await medicalLogService.createMedicalLog({
    animal_id: id,
    user_id: BigInt(user_id),
    type: type ?? null,
    description: description ?? null,
    created_date: new Date(created_date),
    start_date: start_date ? new Date(start_date) : null,
    end_date: end_date ? new Date(end_date) : null,
  })

  res.status(201).json(successResponse("Medical log created successfully", newLog))
}