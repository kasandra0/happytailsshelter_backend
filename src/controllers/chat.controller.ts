import type { Request, Response } from "express";
import { getChatReply } from "../services/chat.service.js";

export async function chat(req: Request, res: Response) {
  try {
    const { message } = req.body;

    const response = await getChatReply(message);

    res.json(response);
  } catch (error) {
    console.error("CHATBOT ERROR:", error);

    if (error instanceof Error) {
      return res.status(500).json({
        error: "Chatbot failed",
        details: error.message,
      });
    }

    return res.status(500).json({
      error: "Chatbot failed",
      details: "Unknown error",
    });
  }
}