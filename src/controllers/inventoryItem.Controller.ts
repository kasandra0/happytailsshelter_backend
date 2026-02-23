import type { Request, Response } from "express";
import * as inventoryItemService from "../services/inventoryItem.service.js";
import { successResponse } from "../utils/response.js";

export const getAll= async (req: Request, res: Response) => {
    const inventoryItems = await inventoryItemService.getAllInventoryItems();

    res.json(
        successResponse("Inventory items retrieved successfully", inventoryItems)
    );
}

export async function getById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const inventoryItem = await inventoryItemService.getInventoryItemsById(id);

    if (!inventoryItem) {
        const error = new Error("Inventory item not found");
        (error as any).status = 404;
        throw error; 
    }

    res.json(
        successResponse("Inventory item retrieved successfully", inventoryItem)
    );
}


export async function create(req: Request, res: Response) {
    const inventoryItem = await inventoryItemService.createInventoryItems(req.body);

    res.status(201).json(
        successResponse("Inventory item created successfully", inventoryItem)
    );
}