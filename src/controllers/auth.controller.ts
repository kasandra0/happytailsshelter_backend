import type { Request, Response } from "express";
import * as authService from "../services/auth.service.js";
import { successResponse } from "../utils/response.js";

export async function login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    const result = await authService.loginUser(email, password);

    res.json(successResponse("Login successful", result));
}

export async function register(req: Request, res: Response): Promise<void> {
    const { email, password, firstName, lastName } = req.body;

    const result = await authService.registerUser(email, password, firstName, lastName);

    res.status(201).json(successResponse("Registration successful", result));
}
