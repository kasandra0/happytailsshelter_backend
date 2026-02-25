import type { Request, Response } from "express";
import * as userService from "../services/user.service.js";
import { successResponse } from "../utils/response.js";

export async function getAll(req: Request, res: Response) {
    const users = await userService.getAllUsers();
    res.json(successResponse("Users retrieved successfully", users));
}

export async function getMe(req: Request, res: Response) {
    const email = req.user?.email;
    if (!email) {
        const error = new Error("Unauthorized");
        (error as any).status = 401;
        throw error;
    }
    const user = await userService.getUserByEmail(email);
    if (!user) {
        const error = new Error("User not found");
        (error as any).status = 404;
        throw error;
    }
    res.json(successResponse("User retrieved successfully", {
        ...user,
        user_id: user.user_id.toString(),
    }));
}

export async function getById(req: Request, res: Response) {
    const id = BigInt(req.params.id as string);
    const user = await userService.getUserById(id);
    if (!user) {
        const error = new Error("User not found");
        (error as any).status = 404;
        throw error;
    }
    res.json(successResponse("User retrieved successfully", {
        ...user,
        user_id: user.user_id.toString(),
    }));
}

export async function updateUser(req: Request, res: Response) {
    const id = BigInt(req.params.id as string);
    const updated = await userService.updateUser(id, req.body);
    res.json(successResponse("User updated successfully", {
        ...updated,
        user_id: updated.user_id.toString(),
    }));
}
