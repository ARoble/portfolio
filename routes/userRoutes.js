const express = require("express");
const fs = require("fs");

const router = express.Router();

const Blog = require("../models/blogModel");
const User = require("../models/userModel");
//const Portfolio = require("../models/portfolioModel");

const portfolio = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/portfolio/portfolio.json`)
);

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.post("/contact", (req, res) => {
  console.log(req.body.name);
});
router.get("/blog", async (req, res) => {
  res.render("blog");
});

router.get("/blog/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    const author = await User.findById(blog.author);
    res.render("blog-single", { blog: blog, author: author });
  } catch {
    res.send("error with displaying single blog post");
  }
});
router.get("/portfolio", (req, res) => {
  console.log(portfolio);
  res.render("portfolio", { portfolio: portfolio });
});
router.get("/portfolio/:id", (req, res) => {
  // const post = portfolio.findById(req.params.id);
  // res.render("portfolio-single", { portfolio: post });
  var singlePortfolio;

  portfolio.forEach(function (e) {
    if (e.id == req.params.id) {
      singlePortfolio = e;
    }
  });

  res.render("portfolio-single", { portfolio: singlePortfolio });
});

module.exports = router;
