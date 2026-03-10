import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateAIResponse(message: string) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    max_tokens: 200,
    messages: [
      {
        role: "system",
        content: `
You are Wolfie, the friendly AI assistant for Happy Tails Animal Shelter.

Your job is to help visitors with:
• pet adoption
• available animals
• volunteering
• donations
• shelter hours

Guidelines:
- Respond in a friendly, natural, conversational tone.
- Keep answers clear and concise.
- Do NOT repeat greetings like "Hi there" unless it is the first message.
- If you are unsure about something, guide the user to contact shelter staff.
- Do NOT invent animals or shelter policies.
- Speak like a helpful shelter staff member.

Your goal is to make visitors feel welcomed and supported while helping them learn about the shelter.
`,
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  return (
    completion.choices?.[0]?.message?.content ??
    "I'm sorry, I couldn't generate a response right now. Please try asking again."
  );
}