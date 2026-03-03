import { Router } from "express";
import * as inventoryItemController from "../controllers/inventoryItem.controller.js";

/**
 * @swagger
 * tags:
 *   name: Inventory Items
 *   description: Operations about inventory item records
 */

const router = Router();

/**
 * @swagger
 * /api/inventory-items:
 *   get:
 *     summary: Get all inventory items
 *     tags: [Inventory Items]
 *     responses:
 *       200:
 *         description: Inventory items retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Inventory items retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/InventoryItem'
 */
router.get("/", inventoryItemController.getAll);

/**
 * @swagger
 * /api/inventory-items/{id}:
 *   get:
 *     summary: Get an inventory item by ID
 *     tags: [Inventory Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The inventory item ID
 *     responses:
 *       200:
 *         description: Inventory item retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Inventory item retrieved successfully
 *                 data:
 *                   $ref: '#/components/schemas/InventoryItem'
 *       404:
 *         description: Inventory item not found
 */
router.get("/:id", inventoryItemController.getById);

/**
 * @swagger
 * /api/inventory-items:
 *   post:
 *     summary: Create a new inventory item
 *     tags: [Inventory Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *             properties:
 *               name:
 *                 type: string
 *                 example: name
 *               type:
 *                 type: string
 *                 example: type
 *               quantity:
 *                 type: integer
 *                 example: 1
 *               cost:
 *                 type: string
 *                 example: cost
 *     responses:
 *       201:
 *         description: Inventory item created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Inventory item created successfully
 *                 data:
 *                   $ref: '#/components/schemas/InventoryItem'
 */
router.post("/", inventoryItemController.create);

/**
 * @swagger
 * /api/inventory-items/{id}:
 *   put:
 *     summary: Update an inventory item by ID
 *     tags: [Inventory Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The inventory item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: name
 *               type:
 *                 type: string
 *                 example: type
 *               quantity:
 *                 type: integer
 *                 example: 1
 *               cost:
 *                 type: string
 *                 example: cost
 *     responses:
 *       201:
 *         description: Inventory item updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Inventry item updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/InventoryItem'
 *       404:
 *         description: Inventory item not found
 */
router.put("/:id", inventoryItemController.updateInventoryItemRecord);

/**
 * @swagger
 * /api/inventory-items/{id}:
 *   delete:
 *     summary: Delete an inventory item by ID
 *     tags: [Inventory Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The inventory item ID
 *     responses:
 *       201:
 *         description: Inventory item deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Inventory item entry deleted successfully
 *       404:
 *         description: Inventory item not found
 */
router.delete("/:id",inventoryItemController.deleteInventoryItemRecord);


export default router;
