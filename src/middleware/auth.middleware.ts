import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export function requireAuth(req: Request, _res: Response, next: NextFunction): void {
    const token = req.headers.authorization?.split("Bearer ")[1];

    if (!token) {
        const error = new Error("Unauthorized");
        (error as any).status = 401;
        throw error;
    }

    const decode = jwt.verify(token, JWT_SECRET);
    req.user = decode as NonNullable<Express.Request["user"]>;
    next();
}
