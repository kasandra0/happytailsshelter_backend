import { Router } from "express";
import * as animalController from "../controllers/animal.controller.js";

/**
 * @swagger
 * tags:
 *   name: Animals
 *   description: Operations about animal records
 */

const router = Router();

/**
 * @swagger
 * /api/animals:
 *   get:
 *     summary: Get all animals
 *     tags: [Animals]
 *     responses:
 *       200:
 *         description: Animals retrieved successfully
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
 *                   example: Animals retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Animal'
 */
router.get("/", animalController.getAll);

/**
 * @swagger
 * /api/animals/{id}:
 *   get:
 *     summary: Get an animal by ID
 *     tags: [Animals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The animal ID
 *     responses:
 *       200:
 *         description: Animal retrieved successfully
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
 *                   example: Animal retrieved successfully
 *                 data:
 *                   $ref: '#/components/schemas/Animal'
 *       404:
 *         description: Animal not found
 */
router.get("/:id", animalController.getById);

/**
 * @swagger
 * /api/animals:
 *   post:
 *     summary: Create a new animal
 *     tags: [Animals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - species
 *               - status
 *             properties:
 *               microchip:
 *                 type: string
 *                 example: "1234567"
 *               name:
 *                 type: string
 *                 example: Buddy
 *               date_of_birth:
 *                 type: string
 *                 format: date
 *                 example: "2020-05-15"
 *               gender:
 *                 type: string
 *                 example: Male
 *               color:
 *                 type: string
 *                 example: Brown
 *               breed:
 *                 type: string
 *                 example: Golden Retriever
 *               species:
 *                 type: string
 *                 example: Dog
 *               weight:
 *                 type: number
 *                 example: 25.5
 *               status:
 *                 type: string
 *                 example: Available
 *               description:
 *                 type: string
 *                 example: Good at basketball
 *               photo_url:
 *                 type: string
 *                 example: "https://example.com/buddy.jpg"
 *     responses:
 *       201:
 *         description: Animal created successfully
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
 *                   example: Animal created successfully
 *                 data:
 *                   $ref: '#/components/schemas/Animal'
 */
router.post("/", animalController.create);

/**
 * @swagger
 * /api/animals/{id}:
 *   put:
 *     summary: Update an animal by ID
 *     tags: [Animals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The animal ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               microchip:
 *                 type: string
 *                 example: "123456"
 *               name:
 *                 type: string
 *                 example: Buddy
 *               date_of_birth:
 *                 type: string
 *                 format: date
 *                 example: "2020-05-15"
 *               gender:
 *                 type: string
 *                 example: Male
 *               color:
 *                 type: string
 *                 example: Brown
 *               breed:
 *                 type: string
 *                 example: Golden Retriever
 *               species:
 *                 type: string
 *                 example: Dog
 *               weight:
 *                 type: number
 *                 example: 25.5
 *               status:
 *                 type: string
 *                 example: Available
 *               description:
 *                 type: string
 *                 example: Good at basketball
 *               photo_url:
 *                 type: string
 *                 example: "https://example.com/buddy.jpg"
 *     responses:
 *       200:
 *         description: Animal updated successfully
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
 *                   example: Animal updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/Animal'
 *       404:
 *         description: Animal not found
 */
router.put("/:id", animalController.updateAnimal);

/**
 * @swagger
 * /api/animals/{id}:
 *   delete:
 *     summary: Delete an animal by ID
 *     tags: [Animals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The animal ID
 *     responses:
 *       200:
 *         description: Animal deleted successfully
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
 *                   example: Animal deleted successfully
 *                 data:
 *                   type: integer
 *                   example: 1
 *       404:
 *         description: Animal not found
 */
router.delete("/:id", animalController.deleteAnimal);

export default router;
