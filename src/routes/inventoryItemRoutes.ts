import express from "express";
import {
  createInventoryItem,
  deleteInventoryItem,
  getAllInventoryItems,
  getInventoryItemById,
  updateInventoryItem,
} from "../controllers/inventoryItemController.js";

const inventoryItemRouter = express.Router();

inventoryItemRouter.post("/", createInventoryItem);
inventoryItemRouter.get("/", getAllInventoryItems);
inventoryItemRouter.get("/:id", getInventoryItemById);
inventoryItemRouter.put("/:id", updateInventoryItem);
inventoryItemRouter.delete("/:id", deleteInventoryItem);

export default inventoryItemRouter;
