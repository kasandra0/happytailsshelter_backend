import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: Email
 *               password:
 *                 type: string
 *                 example: Password
 *     responses:
 *       200:
 *         description: Login successful
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
 *                   example: Login successful
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       example: token
 *       400:
 *         description: Email and password are required
 *       401:
 *         description: Invalid credentials
 *       403:
 *         description: User account is inactive
 */
router.post("/login", authController.login);
router.post("/logout", requireAuth, authController.logout);

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - firstName
 *             properties:
 *               email:
 *                 type: string
 *                 example: Email
 *               password:
 *                 type: string
 *                 example: Password
 *               firstName:
 *                 type: string
 *                 example: First Name
 *               lastName:
 *                 type: string
 *                 example: Last Name
 *     responses:
 *       201:
 *         description: Registration successful
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
 *                   example: Registration successful
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: Registration successful
 *       400:
 *         description: Email, password, and first name are required
 *       409:
 *         description: Email already in use
 */
router.post("/register", authController.register);

export default router;
