import { Router } from "express";
import * as fosterHistoryController from "../controllers/fosterHistory.controller.js";

/**
 * @swagger
 * tags:
 *   name: Foster History
 *   description: Operations about animal foster history records
 */

const fosterHistoryRouter = Router();

/**
 * @swagger
 * /api/foster-history:
 *   get:
 *     summary: Get all foster history records
 *     tags: [Foster History]
 *     responses:
 *       200:
 *         description: Foster history retrieved successfully
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
 *                   example: Foster history retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/FosterHistory'
 */
fosterHistoryRouter.get("/", fosterHistoryController.getAll);

/**
 * @swagger
 * /api/foster-history/user/{id}:
 *   get:
 *     summary: Get all foster history records for a user
 *     tags: [Foster History]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user ID
 *     responses:
 *       200:
 *         description: Foster history retrieved successfully
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
 *                   example: Foster history retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/FosterHistory'
 *       404:
 *         description: Foster history not found
 */
fosterHistoryRouter.get(
  "/user/:id",
  fosterHistoryController.getFosterHistoryRecordsForUser
);

/**
 * @swagger
 * /api/foster-history/animal/{id}:
 *   get:
 *     summary: Get all foster history records for an animal
 *     tags: [Foster History]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The animal ID
 *     responses:
 *       200:
 *         description: Foster history retrieved successfully
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
 *                   example: Foster history retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/FosterHistory'
 *       404:
 *         description: Foster history not found
 */
fosterHistoryRouter.get(
  "/animal/:id",
  fosterHistoryController.getFosterHistoryRecordsForAnimal
);

/**
 * @swagger
 * /api/foster-history:
 *   post:
 *     summary: Create a new foster history record
 *     tags: [Foster History]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - animal_id
 *               - user_id
 *               - staff_id
 *             properties:
 *               animal_id:
 *                 type: integer
 *                 example: 1
 *               user_id:
 *                 type: string
 *                 example: "42"
 *               staff_id:
 *                 type: string
 *                 example: "7"
 *               start_date:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-01-15T00:00:00.000Z"
 *               end_date:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-03-15T00:00:00.000Z"
 *     responses:
 *       201:
 *         description: Foster history created successfully
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
 *                   example: Foster history created successfully
 *                 data:
 *                   $ref: '#/components/schemas/FosterHistory'
 */
fosterHistoryRouter.post("/", fosterHistoryController.create);

/**
 * @swagger
 * /api/foster-history/{id}:
 *   put:
 *     summary: Update a foster history record by ID
 *     tags: [Foster History]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The foster history record ID
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
 *               user_id:
 *                 type: string
 *                 example: "42"
 *               staff_id:
 *                 type: string
 *                 example: "7"
 *               start_date:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-01-15T00:00:00.000Z"
 *               end_date:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-03-15T00:00:00.000Z"
 *     responses:
 *       200:
 *         description: Foster history updated successfully
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
 *                   example: Foster history updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/FosterHistory'
 *       404:
 *         description: Foster history not found
 */
fosterHistoryRouter.put(
  "/:id",
  fosterHistoryController.updateFosterHistoryRecord
);

/**
 * @swagger
 * /api/foster-history/{id}:
 *   delete:
 *     summary: Delete a foster history record by ID
 *     tags: [Foster History]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The foster history record ID
 *     responses:
 *       200:
 *         description: Foster history deleted successfully
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
 *                   example: Foster history deleted successfully
 *                 data:
 *                   type: integer
 *                   example: 1
 *       404:
 *         description: Foster history not found
 */
fosterHistoryRouter.delete(
  "/:id",
  fosterHistoryController.deleteFosterHistoryRecord
);

export default fosterHistoryRouter;
