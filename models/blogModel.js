const mongoose = require("mongoose");
const path = require("path");

const thumbnailBasePath = "uploads/blogThumbnail";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin",
  },
  content: { type: String, required: true },
  contentType: { type: String, required: true },
  thumbnail: {
    type: String,
    default: `C:\Users\USER\Documents\Portfolio Project\public\assets\images\hargeisa.png`,
  },
  createdAt: { type: Date, default: Date.now },
});

blogSchema.virtual("thumbnailPath").get(function () {
  if (this.thumbnail != null) {
    return path.join("/", thumbnailBasePath, this.thumbnail);
  }
});

const blog = mongoose.model("blog", blogSchema);

module.exports = blog;
module.exports.thumbnailBasePath = thumbnailBasePath;
