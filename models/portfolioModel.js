const mongoose = require("mongoose");
const path = require("path");

const backimageBasePath = "uploads/portfolioBackimage";

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  backimage: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

portfolioSchema.virtual("backimagePath").get(function () {
  if (this.backimage != null) {
    return path.join("/", backimageBasePath, this.backimage);
  }
});

const portfolio = mongoose.model("portfolio", portfolioSchema);

module.exports = portfolio;
module.exports.backimageBasePath = backimageBasePath;
