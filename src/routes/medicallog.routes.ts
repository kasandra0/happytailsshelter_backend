import { Router } from "express";
import * as medicallogController from "../controllers/medicalLog.controller.js";

/**
 * @swagger
 * tags:
 *   name: Medical Log
 *   description: Operations about animal medical log records
 */

const router = Router();

/**
 * @swagger
 * /api/medical-log:
 *   get:
 *     summary: Get all medical log entries
 *     tags: [Medical Log]
 *     responses:
 *       200:
 *         description: Log entries for this entity retrieved successfully
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
 *                   example: Log entries for this entity retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/MedicalLog'
 */
router.get("/", medicallogController.getAll);

/**
 * @swagger
 * /api/medical-log/{id}:
 *   get:
 *     summary: Get a medical log entry by ID
 *     tags: [Medical Log]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The log history ID
 *     responses:
 *       200:
 *         description: Log entry for this entity found successfully
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
 *                   example: Log entry for this entity found successfully
 *                 data:
 *                   $ref: '#/components/schemas/MedicalLog'
 *       404:
 *         description: Log entry not found
 */
router.get("/:id", medicallogController.getById);

/**
 * @swagger
 * /api/medical-log:
 *   post:
 *     summary: Create a new medical log entry
 *     tags: [Medical Log]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - animal_id
 *               - created_date
 *               - user_id
 *             properties:
 *               animal_id:
 *                 type: integer
 *                 example: 1
 *               type:
 *                 type: integer
 *                 example: 1
 *               created_date:
 *                 type: string
 *                 format: date
 *                 example: created_date
 *               user_id:
 *                 type: string
 *                 example: user_id
 *               description:
 *                 type: string
 *                 example: description
 *               start_date:
 *                 type: string
 *                 format: date
 *                 example: start_date
 *               end_date:
 *                 type: string
 *                 format: date
 *                 example: end_date
 *     responses:
 *       201:
 *         description: Log entry created successfully
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
 *                   example: Log entry created successfully
 *                 data:
 *                   $ref: '#/components/schemas/MedicalLog'
 */
router.post("/", medicallogController.create);

/**
 * @swagger
 * /api/medical-log/{id}:
 *   put:
 *     summary: Update a medical log entry by ID
 *     tags: [Medical Log]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The log history ID
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
 *               type:
 *                 type: integer
 *                 example: 1
 *               created_date:
 *                 type: string
 *                 format: date
 *                 example: created_date
 *               user_id:
 *                 type: string
 *                 example: user_id
 *               description:
 *                 type: string
 *                 example: description
 *               start_date:
 *                 type: string
 *                 format: date
 *                 example: start_date
 *               end_date:
 *                 type: string
 *                 format: date
 *                 example: end_date
 *     responses:
 *       201:
 *         description: Medical log updated successfully
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
 *                   example: Medical log updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/MedicalLog'
 *       404:
 *         description: Log entry not found
 */
router.put("/:id", medicallogController.updateMedicalLogRecord);

/**
 * @swagger
 * /api/medical-log/{id}:
 *   delete:
 *     summary: Delete a medical log entry by ID
 *     tags: [Medical Log]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The log history ID
 *     responses:
 *       201:
 *         description: Medical log entry deleted successfully
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
 *                   example: Medical log entry deleted successfully
 *       404:
 *         description: Log entry not found
 */
router.delete("/:id", medicallogController.deleteMedicalLogRecord);

export default router;
