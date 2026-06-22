import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded Gemini Client
let aiInstance: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing");
    }
    aiInstance = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiInstance;
}

// Fallback intelligent response generator if API key is not present or fails
function getFallbackResponse(message: string): string {
  const msg = message.toLowerCase();
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return "Hello! I am the MananCodes Cybernetic AI Agent. How can I help you elevate your digital presence today? We build premium, blazing-fast websites with dark cyber aesthetics.";
  }
  if (msg.includes("price") || msg.includes("plan") || msg.includes("cost") || msg.includes("pricing")) {
    return "MananCodes offers four core premium plans tailored to your needs:\n\n1. ⚡ Spark (₹4,999): Ideal for personal brands and portfolios. Includes 1 landing page with WhatsApp integration.\n2. 🚀 Growth (₹7,999): Business websites. 3-5 pages with custom sections.\n3. 👑 Pro (₹14,999): 5-10 pages, priority support, premium animations, blog system.\n4. ✨ Elite (₹24,999): Fully custom-designed website, 3D elements, advanced animations, and real-time AI Chatbot integration + Free custom domain!";
  }
  if (msg.includes("tech") || msg.includes("stack") || msg.includes("use") || msg.includes("react") || msg.includes("three")) {
    return "We specialize in a high-performance modern stack: React 19, TypeScript, Tailwind CSS v4, Framer Motion, GSAP ScrollTrigger, Lenis Smooth Scrolling, and Three.js for interactive WebGL 3D elements. This ensures your site is hyper-responsive and matches standard-setting brands like Apple, Stripe, and Linear.";
  }
  if (msg.includes("contact") || msg.includes("start") || msg.includes("hire") || msg.includes("talk")) {
    return "Awesome choice! You can start a project by filling out the form on our Contact Page, sending an email directly to mananmmaisheri23@gmail.com, or clicking the WhatsApp shortcut at the bottom of the page. Let's build something extraordinary!";
  }
  if (msg.includes("process") || msg.includes("time") || msg.includes("long")) {
    return "Our production workflow is modular and ultra-fast: 01 Discover -> 02 Plan -> 03 Build -> 04 Launch -> 05 Grow. Small projects ship in 3-5 days, whereas fully-custom Elite applications with complex interactive 3D pages take approximately 8-14 days.";
  }
  return "That is an excellent idea. MananCodes specialize in precisely that category. We can craft ultra-smooth dark-themed interactive apps, 3D portfolios, or custom APIs to suit this perfectly. Feel free to contact us via our Contact section to outline your precise requirements!";
}

// Interactive Gemini Assistant Endpoint
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const systemInstruction = 
    "You are the cybernetic AI Agent for 'MananCodes', a elite futuristic freelance design & development agency. " +
    "MananCodes is managed by Manan, a world-class WebGL, Three.js, React, and Tailwind developer. " +
    "You communicate in a premium, ultra-sleek, professional tone with a touch of cybernetic confidence. " +
    "Be helpful, informative, and persuade the developer or business to hire MananCodes. " +
    "Keep responses structured, neat, concise, and formatted in clean markdown, keeping spacing elegant. " +
    "Here is the service/pricing details:\n" +
    "- ⚡ Spark (₹4,999): Portfolios/Landing pages, responsive, forms, WhatsApp.\n" +
    "- 🚀 Growth (₹7,999): 3-5 pages business setup, custom sections, maps, top speed.\n" +
    "- 👑 Pro (₹14,999): 5-10 pages premium UI/UX, advanced animations, blogging, priority support.\n" +
    "- ✨ Elite (₹24,999): Completely custom, advanced 3D WebGL features, dynamic elements, AI integration, free domain + priority.\n" +
    "- Add-ons: Chatbots, 3D visuals, eCommerce, dynamic custom dashboards, ongoing support.\n" +
    "If the visitor wants to start or purchase, direct them to our Contact page forms, email mananmmaisheri23@gmail.com, or social channels. " +
    "Keep replies within 2-3 short paragraphs to maintain a sleek chatbot UI layout.";

  try {
    const ai = getGeminiClient();
    
    // Construct contents with basic history
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((h: any) => {
        contents.push({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.content }],
        });
      });
    }
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ text: response.text || "" });
  } catch (error) {
    console.warn("Gemini API error (using fallback):", error);
    // Graceful fallback to guarantee smooth experience in all environments
    const fallbackMessage = getFallbackResponse(message);
    res.json({ text: fallbackMessage, isFallback: true });
  }
});

async function startServer() {
  // Vite dev server middleware in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static files
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
