import type { Request, Response } from "express";
import * as foster_historyService from "../services/fosterhistory.service.js";
import { successResponse } from "../utils/response.js";

export const getAll= async (req: Request, res: Response) => {
    const fosterHistory = await foster_historyService.getAllIFosterHistory();

    res.json(
        successResponse("Foster History entries retrieved successfully", fosterHistory)
    );
}

export async function getById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const fosterHistory = await foster_historyService.getFosterHistoryById(id);

    if (!fosterHistory) {
        const error = new Error("Foster History entry not found");
        (error as any).status = 404;
        throw error; 
    }

    res.json(
        successResponse("Foster History entry retrieved successfully", fosterHistory)
    );
}


export async function create(req: Request, res: Response) {
    const fosterHistory = await foster_historyService.createFosterHistory(req.body);

    res.status(201).json(
        successResponse("Foster History entry created successfully", fosterHistory)
    );
}