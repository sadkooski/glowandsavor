import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now },
});

const Article = mongoose.model("Article", articleSchema);

export default Article;