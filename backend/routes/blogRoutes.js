import express from "express";
import Article from "../models/Article.js";

const router = express.Router();

// Pobranie artykułów
router.get("/", async (req, res) => {
    try {
    const articles = await Article.find();
    res.json(articles);
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
});

export default router;