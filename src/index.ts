import express from "express";
import dotenv from "dotenv";
import prisma from "./lib/prisma.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/test", async (req, res) => {
    try {
        console.log("DB_USER:", process.env.DB_USER);
        console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
        console.log("DB_PASSWORD type:", typeof process.env.DB_PASSWORD);

        const result = await prisma.$queryRaw`SELECT 1`;
        res.json({ db: result });
    } catch (error: any) {
        console.error("FULL ERROR:", error);
        res.status(500).json({
            message: error.message,
            code: error.code,
            meta: error.meta,
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});