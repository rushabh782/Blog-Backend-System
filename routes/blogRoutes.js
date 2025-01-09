const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const authenticateToken = require("../middleware/authenticateToken");

// Routes for blogs
router.post("/", authenticateToken, blogController.createBlog);
router.get("/", blogController.getBlogs); // Public route

module.exports = router;
