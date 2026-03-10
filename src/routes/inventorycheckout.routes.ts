import { Router } from "express";
import * as inventoryCheckoutController from "../controllers/inventoryCheckout.controller.js";

/**
 * @swagger
 * tags:
 *   name: Inventory Checkout
 *   description: Operations about inventory checkout records
 */

const router = Router();

/**
 * @swagger
 * /api/inventory-checkout:
 *   get:
 *     summary: Get all inventory checkout entries
 *     tags: [Inventory Checkout]
 *     responses:
 *       200:
 *         description: All Inventory Checkout entries retrieved successfully
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
 *                   example: All Inventory Checkout entries retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/InventoryCheckout'
 */
router.get("/", inventoryCheckoutController.getAll);

/**
 * @swagger
 * /api/inventory-checkout/{id}:
 *   get:
 *     summary: Get an inventory checkout entry by ID
 *     tags: [Inventory Checkout]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The checkout ID
 *     responses:
 *       200:
 *         description: Inventory Checkout entry retrieved successfully
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
 *                   example: Inventory Checkout entry retrieved successfully
 *                 data:
 *                   $ref: '#/components/schemas/InventoryCheckout'
 *       404:
 *         description: Inventory Checkout entry not found
 */
router.get("/animal/:id", inventoryCheckoutController.getAllForAnimal);
router.get("/:id", inventoryCheckoutController.getById);

/**
 * @swagger
 * /api/inventory-checkout:
 *   post:
 *     summary: Create a new inventory checkout entry
 *     tags: [Inventory Checkout]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - inventory_item_id
 *             properties:
 *               animal_id:
 *                 type: integer
 *                 example: 1
 *               checkout_date:
 *                 type: string
 *                 format: date
 *                 example: checkout_date
 *               return_date:
 *                 type: string
 *                 format: date
 *                 example: return_date
 *               quantity:
 *                 type: integer
 *                 example: 1
 *               inventory_item_id:
 *                 type: integer
 *                 example: 1
 *               user_id:
 *                 type: string
 *                 example: user_id
 *     responses:
 *       201:
 *         description: Inventory Checkout entry created successfully
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
 *                   example: Inventory Checkout entry created successfully
 *                 data:
 *                   $ref: '#/components/schemas/InventoryCheckout'
 */
router.post("/", inventoryCheckoutController.create);

/**
 * @swagger
 * /api/inventory-checkout/{id}:
 *   put:
 *     summary: Update an inventory checkout entry by ID
 *     tags: [Inventory Checkout]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The checkout ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               animal_id:
 *                 type: integer
 *                 example: 1
 *               checkout_date:
 *                 type: string
 *                 format: date
 *                 example: checkout_date
 *               return_date:
 *                 type: string
 *                 format: date
 *                 example: return_date
 *               quantity:
 *                 type: integer
 *                 example: 1
 *               inventory_item_id:
 *                 type: integer
 *                 example: 1
 *               user_id:
 *                 type: string
 *                 example: user_id
 *     responses:
 *       201:
 *         description: Inventory checkout entry updated successfully
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
 *                   example: Inventry checkout entry updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/InventoryCheckout'
 *       404:
 *         description: Inventory Checkout entry not found
 */
router.put("/", inventoryCheckoutController.updateInventoryCheckoutRecord);

/**
 * @swagger
 * /api/inventory-checkout/{id}:
 *   delete:
 *     summary: Delete an inventory checkout entry by ID
 *     tags: [Inventory Checkout]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The checkout ID
 *     responses:
 *       201:
 *         description: Inventory checkout entry deleted successfully
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
 *                   example: Inventory checkout entry deleted successfully
 *       404:
 *         description: Inventory Checkout entry not found
 */
router.delete("/", inventoryCheckoutController.deleteInventoryCheckoutRecord);
router.put("/:id", inventoryCheckoutController.updateInventoryCheckoutRecord);
router.delete(
  "/:id",
  inventoryCheckoutController.deleteInventoryCheckoutRecord
);

export default router;
