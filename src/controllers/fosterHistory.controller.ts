import type { Request, Response } from "express";
import * as fosterHistoryService from "../services/fosterHistory.service.js";
import { successResponse } from "../utils/response.js";

export async function getAll(req: Request, res: Response) {
  const fosterHistoryRecords =
    await fosterHistoryService.getAllFosterHistoryRecords();

  res.json(
    successResponse(
      "Foster history retrieved successfully",
      fosterHistoryRecords
    )
  );
}

export async function getFosterHistoryRecordsForUser(
  req: Request,
  res: Response
) {
  const id = Number(req.params.id);

  const fosterHistoryRecords =
    await fosterHistoryService.getFosterHistoryByUserId(id);

  if (!fosterHistoryRecords) {
    const error = new Error("Foster history not found");
    (error as any).status = 404;
    throw error;
  }

  res.json(
    successResponse(
      "Foster history retrieved successfully",
      fosterHistoryRecords
    )
  );
}

export async function getFosterHistoryRecordsForAnimal(
  req: Request,
  res: Response
) {
  const id = Number(req.params.id);

  const fosterHistoryRecords =
    await fosterHistoryService.getFosterHistoryByAnimalId(id);

  if (!fosterHistoryRecords) {
    const error = new Error("Foster history not found");
    (error as any).status = 404;
    throw error;
  }

  res.json(
    successResponse(
      "Foster history retrieved successfully",
      fosterHistoryRecords
    )
  );
}

export async function create(req: Request, res: Response) {
  try {
    const fosterHistory = await fosterHistoryService.createFosterHistoryRecord(
      req.body
    );
    res
      .status(201)
      .json(
        successResponse("Foster history created successfully", fosterHistory)
      );
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}

export async function updateFosterHistoryRecord(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const fosterHistoryRecords =
      await fosterHistoryService.updateFosterHistoryRecord(id, req.body);

    if (!fosterHistoryRecords) {
      const error = new Error("Foster history not updated");
      (error as any).status = 404;
      throw error;
    }

    res.json(
      successResponse(
        "Foster history updated successfully",
        fosterHistoryRecords
      )
    );
  } catch (error: any) {
    const status = error.status ?? 400;
    res.status(status).json({ success: false, message: error.message });
  }
}

export async function deleteFosterHistoryRecord(req: Request, res: Response) {
  const id = Number(req.params.id);

  await fosterHistoryService.deleteFosterHistory(id);

  res.json(successResponse("Foster history deleted successfully", id));
}
