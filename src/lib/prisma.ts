import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { Pool } from "pg";
import { PrismaClient } from "../generated/prisma/client.js";

dotenv.config();

const pool = new Pool({
  host: "aws-1-us-east-1.pooler.supabase.com",
  port: 5432,
  user: "postgres.tyayuesxvzdpxzsfxdkx",
  password: process.env.DB_PASSWORD,
  database: "postgres",
  ssl: {
    rejectUnauthorized: false,
  },
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

export default prisma;
