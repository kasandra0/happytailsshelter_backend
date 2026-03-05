import { Router } from "express";
import * as animalController from "../controllers/animal.controller.js";

/**
 * @openapi
 * tags:
 *   name: Animals
 *   description: Operations about animal records
 */

const router = Router();

/**
 * @openapi
 * /api/animals:
 *   get:
 *     tags: [Animals]
 *     summary: Retrieve a list of animals
 *     responses:
 *       200:
 *         description: A list of animals.
 */
router.get("/", animalController.getAll);

router.get("/:id/medical-logs", animalController.getMedicalLogs);
router.post("/:id/medical-logs", animalController.createMedicalLog);

/**
 * @openapi
 * /api/animals/{id}:
 *   get:
 *     tags: [Animals]
 *     summary: Retrieve an animal by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Numeric ID of the animal to get
 *     responses:
 *       200:
 *         description: Animal data
 */
router.get("/:id", animalController.getById);

/**
 * @openapi
 * /api/animals:
 *   post:
 *     tags: [Animals]
 *     summary: Create a new animal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               species:
 *                 type: string
 *     responses:
 *       201:
 *         description: Animal created
 */
router.post("/", animalController.create);

/**
 * @openapi
 * /api/animals/{id}:
 *   put:
 *     tags: [Animals]
 *     summary: Update an animal
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Animal updated
 */
router.put("/:id", animalController.updateAnimal);

/**
 * @openapi
 * /api/animals/{id}:
 *   delete:
 *     tags: [Animals]
 *     summary: Delete an animal
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       204:
 *         description: Animal deleted
 */
router.delete("/:id", animalController.deleteAnimal);

export default router;