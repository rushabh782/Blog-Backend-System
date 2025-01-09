const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// Load environment variables from .env
dotenv.config();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("Authorization Header:", authHeader);
  const token = authHeader && authHeader.split(" ")[1]; // Extract token from the 'Authorization' header

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid Token" });
    }
    req.user = user; // Add the verified user payload to the request object
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = authenticateToken;
