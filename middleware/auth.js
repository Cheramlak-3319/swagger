/**
 * JWT Authentication Middleware
 */

const jwt = require("jsonwebtoken");
const JWT_SECRET =
  process.env.JWT_SECRET || "your-super-secret-jwt-key-change-in-production";

/**
 * Mock authentication function - REPLACE WITH REAL DATABASE LOGIC
 */
exports.authenticate = (username, password) => {
  // TODO: Replace with actual database authentication
  if (username === "admin" && password === "admin123") {
    const token = jwt.sign(
      {
        userId: "123456",
        username: username,
        role: "admin",
      },
      JWT_SECRET,
      { expiresIn: "1h" },
    );
    return token;
  }
  throw new Error("Invalid credentials");
};

/**
 * JWT Verification Middleware
 */
exports.verifyToken = (req, res, next) => {
  // Get token from header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({
      error: true,
      message: "Access token required",
      code: "AUTH_001",
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user data to request
    next();
  } catch (error) {
    return res.status(401).json({
      error: true,
      message: "Invalid or expired token",
      code: "AUTH_002",
    });
  }
};

/**
 * Role-based authorization middleware
 */
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        error: true,
        message: "Insufficient permissions",
        code: "AUTH_003",
      });
    }
    next();
  };
};
