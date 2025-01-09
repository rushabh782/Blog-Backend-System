const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const BlogPost = require("./blogPost");
const User = require("./user");

const Comment = sequelize.define("Comment", {
  content: { type: DataTypes.TEXT, allowNull: false },
});

Comment.belongsTo(BlogPost, { foreignKey: "postId" });
Comment.belongsTo(User, { foreignKey: "authorId" });

module.exports = Comment;
