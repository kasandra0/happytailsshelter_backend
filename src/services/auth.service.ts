import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export async function registerUser(
    email: string,
    password: string,
    firstName: string,
    lastName?: string
): Promise<{ message: string }> {
    if (!email || !password || !firstName) {
        const error = new Error("Email, password, and first name are required");
        (error as any).status = 400;
        throw error;
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
        const error = new Error("Email already in use");
        (error as any).status = 409;
        throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            first_name: firstName,
            last_name: lastName ?? null,
            role: 1,//foster parent role
            status: "A",
        },
    });

    return { message: "Registration successful" };
}

export async function loginUser(email: string, password: string): Promise<{ token: string }> {
    if (!email || !password) {
        const error = new Error("Email and password are required");
        (error as any).status = 400;
        throw error;
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        const error = new Error("Invalid credentials");
        (error as any).status = 401;
        throw error;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        const error = new Error("Invalid credentials");
        (error as any).status = 401;
        throw error;
    }

    if (user.status !== "A") {
        const error = new Error("User account is inactive");
        (error as any).status = 403;
        throw error;
    }

    const token = jwt.sign(
        { user_id: user.user_id.toString(), email: user.email, role: user.role },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
    );

    return { token };
}
