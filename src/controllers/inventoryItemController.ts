import type { inventory_itemModel } from "../generated/prisma/models.js";
import prisma from "../lib/prisma.js";
import { RequestUtility } from "../utilities/requestUtility.js";

export const createInventoryItem = async (req: any, res: any) => {

    try {
    const { name, type, quantity, cost } = req.body;

    const newInventoryItem = await prisma.inventory_item.create({
    data: {name, type, quantity, cost},
    });


    res.status(201).json(newInventoryItem);
    }   catch (e: any) {
        console.error(e);
        res.status(400).json({ error: e.message });
    }
};

export const getAllInventoryItems = async (req: any, res: any) => {
  try {
    const allInventoryItems = await prisma.inventory_item.findMany();
    res.json(allInventoryItems);
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch inventory items" });
  }
};

export const getInventoryItemById = async (req: any, res: any) => {
  try {

    const id = req.params.id as string;

    if (!RequestUtility.canSearchForRecord(id)) {
      throw new Error("Request Invalid");
    }

    const inventory_item = await prisma.inventory_item.findUnique({
      where: {
        inventory_item_id: Number(id),
      },
    });

    if (!inventory_item) {
      return res.status(404).json({ error: "Inventory Item not found" });
    }

    res.status(200).json(inventory_item);
  } catch (e: any) {
    console.error(e);
    res.status(400).json({ error: e.message });
  }
};

export const updateInventoryItem = async (req: any, res: any) => {
  try {
    const id = req.params.id;

    const inventory_item: inventory_itemModel = req.body;

    if (!RequestUtility.canSearchForRecord(id)) {
      throw new Error("Request Invalid");
    }

    // const { name, type, quantity, cost } = req.body;

    const updatedInventoryItem = await prisma.inventory_item.update({
    where: {
      inventory_item_id: Number(id)
    },
      data: inventory_item,
    });
    res.status(200).json(updatedInventoryItem);
  } 
  catch (e: any) {
    console.error(e);
    res.status(400).json({ error: e.message });
  }
};

export const deleteInventoryItem = async (req: any, res: any) => {
  try {
    const id = req.params.id;

    if (!RequestUtility.canSearchForRecord(id)) {
      throw new Error("Request Invalid");
    }

    await prisma.inventory_item.delete({
      where: {
        inventory_item_id: Number(id),
      },
    });

    res
      .status(200)
      .json({
        wasSuccessful: true,
        message: "Inventory item deleted successfully",
        inventory_item_Id: id,
      });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
};