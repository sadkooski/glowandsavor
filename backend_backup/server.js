import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import blogRoutes from "./routes/blogRoutes.js";

// Poprawne ustawienie __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Ścieżka do folderu build frontendu
const frontendPath = path.join(__dirname, "../frontend/dist");
console.log("Serwuję pliki z:", frontendPath);

// Serwowanie plików statycznych React
app.use(express.static(frontendPath));

// Obsługa wszystkich żądań i przekierowanie do index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Endpointy API
app.use("/api/blog", blogRoutes);

// Konfiguracja transportera dla nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Endpoint do obsługi wysyłania e-maila
app.post("/api/send-email", (req, res) => {
  const { name, email, title, message } = req.body;

  if (!name || !email || !title || !message) {
    return res.status(400).send("Wszystkie pola są wymagane!");
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Nowa wiadomość od ${name}: ${title}`,
    text: `Wiadomość od: ${name} (${email})\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error("Błąd podczas wysyłania e-maila:", error);
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Wiadomość została wysłana!");
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serwer działa na http://localhost:${PORT}`));
