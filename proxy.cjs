
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = "AIzaSyCuOeBI0QmgsEkV82kw_ya35T9A1ATJtsk";

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    console.log("Sending to Gemini, message count:", messages.length);

    const contents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const systemText = "You are Celeste, the personal style assistant for Celeste Accessories, a luxury Nigerian accessories brand. You are warm, knowledgeable, and refined. Help customers find products and give styling advice. Write in flowing prose, never lists. Keep responses under 80 words. Products: Maison Tote (Bags) 285000 Naira Ready to Ship, Eclat Silk Scarf (Scarves) 95000 Naira Bestseller, Soir Clutch (Bags) 165000 Naira Limited, Sable Card Holder (Wallets) 48000 Naira Ready to Ship, Petite Bucket (Bags) 220000 Naira Made to Order, Lumiere Frames (Accessories) 175000 Naira Limited, Demi Mini Bag (Bags) 195000 Naira New In, Arc Cuff (Jewellery) 68000 Naira Made to Order.";

    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GEMINI_API_KEY;

    const response = await axios.post(url, {
      system_instruction: { parts: [{ text: systemText }] },
      contents: contents,
      generationConfig: { maxOutputTokens: 200, temperature: 0.7 },
    });

    console.log("Gemini status:", response.status);

    const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    console.log("Reply:", reply?.substring(0, 100));

    if (!reply) {
      return res.status(500).json({ error: "No reply from Gemini" });
    }

    res.json({ content: [{ text: reply }] });

  } catch (err) {
    console.error("Proxy error:", err.response?.data || err.message);
    res.status(500).json({ error: err.response?.data?.error?.message || err.message });
  }
});

app.listen(3001, () => {
  console.log("Celeste proxy running on http://localhost:3001");
});
