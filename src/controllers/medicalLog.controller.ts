import type { Request, Response } from "express";
import * as medicallogService from "../services/medicallog.service.js";
import { successResponse } from "../utils/response.js";

export const getAll= async (req: Request, res: Response) => {
    const logEntries = await medicallogService.getAllIMedicalLog();

    res.json(
        successResponse("Log entries for this entity retrieved successfully", logEntries)
    );
}

export async function getById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const logEntries = await medicallogService.getMedicalLogById(id);

    if (!logEntries) {
        const error = new Error("Log entry not found");
        (error as any).status = 404;
        throw error; 
    }

    res.json(
        successResponse("Log entry for this entity found successfully", logEntries)
    );
}


export async function create(req: Request, res: Response) {
    const logEntries = await medicallogService.createMedicalLog(req.body);

    res.status(201).json(
        successResponse("Log entry created successfully", logEntries)
    );
}