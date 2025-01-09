const Comment = require("../models/comment");

exports.addComment = async (req, res) => {
  try {
    const { postId, content } = req.body;
    const comment = await Comment.create({
      postId,
      content,
      authorId: req.user.id,
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.findAll({ where: { postId } });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
