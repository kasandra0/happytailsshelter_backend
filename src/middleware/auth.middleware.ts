import type { Request, Response, NextFunction } from "express";
import { supabase } from "../lib/supabase.js";

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split("Bearer ")[1];

    if (!token) {
        const error = new Error("Unauthorized");
        (error as any).status = 401;
        throw error;
    }

    const { data, error: authError } = await supabase.auth.getUser(token);

    if (authError || !data.user) {
        const error = new Error("Unauthorized");
        (error as any).status = 401;
        throw error;
    }

    req.user = data.user;
    next();
}
