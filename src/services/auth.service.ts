import { supabase } from "../lib/supabase.js";
import prisma from "../lib/prisma.js";

export async function registerUser(
    email: string,
    password: string,
    firstName: string,
    lastName?: string
) {
    if (!email || !password || !firstName) {
        const error = new Error("Email, password, and first name fields are required");
        (error as any).status = 400;
        throw error;
    }

    const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
    });

    if (signUpError) {
        const error = new Error(signUpError.message);
        (error as any).status = 400;
        throw error;
    }

    await prisma.user.create({
        data: {
            email,
            first_name: firstName,
            last_name: lastName ?? null,
            role: 2,
            status: "Non Staff",
        },
    });

    return { message: "Registration successful. Please verify your email." };
}
