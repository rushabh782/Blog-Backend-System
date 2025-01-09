const BlogPost = require("../models/blogPost");

exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }
    const blog = await BlogPost.create({
      title,
      content,
      authorId: req.user.id,
    });
    res.status(201).json({ message: "Blog post created successfully", blog });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the blog post" });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.findAll({ include: "author" });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
