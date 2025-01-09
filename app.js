const express = require("express");
const sequelize = require("./config/database");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(require("body-parser").json());

// Sync Database
sequelize
  .sync()
  .then(() => console.log("Database synced!"))
  .catch((err) => console.error("Database sync failed:", err));

app.use("/auth", require("./routes/authRoutes"));
app.use("/blogs", require("./routes/blogRoutes"));
app.use("/comments", require("./routes/commentRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
