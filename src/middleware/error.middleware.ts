import type { Request, Response, NextFunction } from "express";

export function errorMiddleware(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
}