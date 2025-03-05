import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Połączenie z MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Połączono z MongoDB"))
    .catch((err) => console.error("❌ Błąd połączenia z MongoDB", err));

// Testowe API
app.get("/", (req, res) => {
    res.send("Serwer działa!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serwer działa na http://localhost:${PORT}`));

app.use("/api/blog", blogRoutes);
