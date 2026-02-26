import type { Request, Response } from "express";
import * as inventoryCheckoutService from "../services/inventoryCheckout.service.js";
import { successResponse } from "../utils/response.js";

export const getAll= async (req: Request, res: Response) => {
    const inventoryCheckout = await inventoryCheckoutService.getAllInventoryCheckout();

    res.json(
        successResponse("All Inventory Checkout entries retrieved successfully", inventoryCheckout)
    );
}

export async function getById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const inventoryCheckout = await inventoryCheckoutService.getInventoryCheckoutById(id);

    if (!inventoryCheckout) {
        const error = new Error("Inventory Checkout entry not found");
        (error as any).status = 404;
        throw error; 
    }

    res.json(
        successResponse("Inventory Checkout entry retrieved successfully", inventoryCheckout)
    );
}


export async function create(req: Request, res: Response) {
    const inventoryCheckout = await inventoryCheckoutService.createInventoryCheckout(req.body);

    res.status(201).json(
        successResponse("Inventory Checkout entry created successfully", inventoryCheckout)
    );
}

export async function updateInventoryCheckoutRecord(req: Request, res: Response) {
  const id = Number(req.params.id);

  const updatedItemCheckoutEntry = await inventoryCheckoutService.updateInventoryCheckoutById(id, req.body);

  res.status(201).json(
    successResponse("Inventry checkout entry updated successfully", updatedItemCheckoutEntry)
  );
}

export async function deleteInventoryCheckoutRecord(req: Request, res: Response) {
  const id = Number(req.params.id);

  await inventoryCheckoutService.deleteInventoryCheckoutEntry(id);

  res.status(201).json(
    successResponse("Inventory checkout entry deleted successfully")
  );
}