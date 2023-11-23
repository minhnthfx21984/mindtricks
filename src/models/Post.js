import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  creator: { type: String, required: true },
  data: { type: Object, required: true },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
