import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { Pool } from "pg";
import { PrismaClient } from '@prisma/client';

dotenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false,
    },
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

export default prisma;
