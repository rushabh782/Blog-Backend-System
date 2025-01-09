const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");

const BlogPost = sequelize.define("BlogPost", {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
});

BlogPost.belongsTo(User, { foreignKey: "authorId" });

module.exports = BlogPost;
