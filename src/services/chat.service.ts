import { generateAIResponse } from "./ai.service.js";
import { getAllAnimals } from "./animal.service.js";

function detectIntent(message: string) {
  const text = message.toLowerCase();

  if (text.includes("adopt") || text.includes("adoption")) return "adoption";
  if (text.includes("volunteer")) return "volunteer";
  if (text.includes("donate") || text.includes("donation")) return "donation";
  if (text.includes("hours") || text.includes("open")) return "hours";

  if (
    text.includes("dog") ||
    text.includes("cat") ||
    text.includes("animal") ||
    text.includes("animals") ||
    text.includes("pet") ||
    text.includes("pets") ||
    text.includes("puppy") ||
    text.includes("kitten") ||
    text.includes("available")
  ) {
    return "animals";
  }

  return "ai";
}

export async function getChatReply(message: string) {
  try {
    message = message.trim();

    if (!message || message.length < 3) {
      return {
        reply:
          "Could you tell me a little more about what you're looking for? I can help with adoptions, available pets, volunteering, donations, and shelter hours.",
      };
    }

    const intent = detectIntent(message);

    if (intent === "adoption") {
      return {
        reply:
          "If you're interested in adopting, you can start by looking through the animals currently available. Once you find a pet you connect with, you can submit an adoption application and the shelter team will guide you through the next steps.",
      };
    }

    if (intent === "volunteer") {
      return {
        reply:
          "Volunteers are a big part of helping the shelter run smoothly. They often help with animal care, events, and supporting adoptions. If you'd like to get involved, the shelter can help you get started with the volunteer process.",
      };
    }

    if (intent === "donation") {
      return {
        reply:
          "Donations make a real difference for the animals. They help cover food, supplies, medical care, and day-to-day shelter needs. Every contribution helps support pets while they wait for their forever homes.",
      };
    }

    if (intent === "hours") {
      return {
        reply:
          "Happy Tails Animal Shelter is open Monday through Friday from 9 AM to 5 PM. If you're planning to visit, coming a little earlier can give you more time to meet the animals.",
      };
    }

    if (intent === "animals") {
      const animals = await getAllAnimals();
      const text = message.toLowerCase();

      let filteredAnimals = animals;

      if (text.includes("dog") || text.includes("puppy")) {
        filteredAnimals = filteredAnimals.filter(
          (a) => a.species?.toLowerCase() === "dog"
        );
      } else if (text.includes("cat") || text.includes("kitten")) {
        filteredAnimals = filteredAnimals.filter(
          (a) => a.species?.toLowerCase() === "cat"
        );
      }

      if (text.includes("available")) {
        filteredAnimals = filteredAnimals.filter(
          (a) => a.status?.toLowerCase() === "available"
        );
      }

      if (!filteredAnimals || filteredAnimals.length === 0) {
        return {
          reply:
            "I couldn't find any animals matching that right now, but new pets can become available often, so it's worth checking again soon.",
        };
      }

      const animalList = filteredAnimals
        .slice(0, 5)
        .map((a) => `• ${a.name} (${a.species})`)
        .join("\n");

      return {
        reply: `Here are a few animals you might want to check out:\n\n${animalList}\n\nLet me know if you'd like help finding a specific type of pet.`,
      };
    }

    const reply = await generateAIResponse(message);
    return { reply };
  } catch (error) {
    console.error("AI unavailable, using fallback:", error);

    return {
      reply:
        "I’m having a little trouble answering that right now, but I can still help with adoptions, available pets, volunteering, donations, and shelter hours.",
    };
  }
}