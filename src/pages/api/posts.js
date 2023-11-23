// pages/api/users.js
import connectDB from "../../database";
import Post from "../../models/Post";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { creator, data } = req.body;
      const newPost = new Post({ creator, data });
      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
    } catch (error) {
      res.status(500).json({ error: "Error saving post" });
    }
  }
  if (req.method === "GET") {
    try {
      const allPosts = await Post.find();
      res.status(201).json(allPosts);
    } catch (error) {
      res.status(500).json({ error: "Error get posts" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
