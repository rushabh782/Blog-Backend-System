const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const authenticateToken = require("../middleware/authenticateToken");

// Routes for comments
router.post("/comments", authenticateToken, commentController.addComment); // Protected route
router.get("/comments/:blogId", commentController.getComments); // Public route

module.exports = router;
