/**
 * 🚀 HellOOpass Production API Server
 * Enterprise-grade Express server with JWT authentication
 */

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// Authentication middleware - adjust path as needed
const auth = require("../middleware/auth.js");

// Load OpenAPI specification
const swaggerDocument = YAML.load(path.join(__dirname, "swagger.yaml"));

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || "development";

// ========================
// SECURITY MIDDLEWARE
// ========================
app.use(helmet()); // Security headers
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: true,
    message: "Too many requests, please try again later.",
  },
});

// Apply rate limiting to API routes
app.use("/api", limiter);

// ========================
// REQUEST PARSING
// ========================
app.use(express.json({ limit: "10mb" })); // JSON body parsing
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// ========================
// LOGGING
// ========================
if (NODE_ENV === "development") {
  app.use(morgan("dev")); // Detailed logging for dev
} else {
  app.use(morgan("combined")); // Standard logging for production
}

// ========================
// PUBLIC ROUTES
// ========================

// 1. API Documentation (Public)
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
    customSiteTitle: "HellOOpass API Documentation",
    customCss: ".swagger-ui .topbar { display: none }",
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      docExpansion: "list",
    },
  }),
);

// 2. Health Check Endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    service: "helloopass-api",
    version: "1.0.11",
    environment: NODE_ENV,
  });
});

// 3. Authentication Endpoint
app.post("/login", (req, res) => {
  try {
    const { username, password } = req.body;

    // Input validation
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        error: "Username and password are required",
      });
    }

    // Call authentication service
    const token = auth.authenticate(username, password);

    // Successful response
    res.status(200).json({
      success: true,
      token: token,
      tokenType: "Bearer",
      expiresIn: 3600,
      message: "Authentication successful",
    });
  } catch (error) {
    console.error("Login error:", error.message);

    // Standardized error response
    res.status(401).json({
      success: false,
      error: error.message || "Invalid credentials",
      code: "AUTH_001",
    });
  }
});

// ========================
// GLOBAL AUTH MIDDLEWARE
// ========================
app.use("/api", auth.verifyToken);

// ========================
// API ROUTE IMPLEMENTATIONS
// ========================
// Note: These are placeholder routes. You'll need to implement actual logic
// or connect to your existing route handlers.

// Dube International Routes
app.get("/api/dube/international/getmerchantlist.php", (req, res) => {
  // Implement merchant list logic
  res.json({
    error: false,
    totalCount: "2792",
    message: [], // Your merchant data here
  });
});

app.get("/api/dube/international/getcustomerlist.php", (req, res) => {
  // Implement customer list logic
  res.json({
    error: false,
    totalCount: "2792",
    message: [], // Your customer data here
  });
});

// Add all other endpoints following the same pattern...
// Example:
app.get("/api/dube/international/getallinvoices.php", (req, res) => {
  const { wallet, start, end, limit, offset } = req.query;
  // Implement invoice fetching logic
  res.json({
    error: false,
    totalCount: "270792",
    message: [], // Your invoice data here
  });
});

// WFP Routes
app.get("/api/wfp/getcategories.php", (req, res) => {
  res.json({
    error: false,
    message: [], // Your category data here
  });
});

// ========================
// ERROR HANDLING
// ========================

// 404 - Route not found
app.use((req, res, next) => {
  res.status(404).json({
    error: true,
    message: `Route ${req.method} ${req.originalUrl} not found`,
    code: "ROUTE_404",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);

  const statusCode = err.status || 500;
  const errorResponse = {
    error: true,
    message:
      NODE_ENV === "production" ? "An unexpected error occurred" : err.message,
    code: err.code || "INTERNAL_500",
  };

  // Include stack trace in development
  if (NODE_ENV === "development") {
    errorResponse.stack = err.stack;
  }

  res.status(statusCode).json(errorResponse);
});

// ========================
// SERVER INITIALIZATION
// ========================

const server = app.listen(PORT, () => {
  console.log(`
  🚀 HELLOOPASS API SERVER
  =========================
  ✅ Server running on port ${PORT}
  ✅ Environment: ${NODE_ENV}
  ✅ Documentation: http://localhost:${PORT}/api-docs
  ✅ Health Check: http://localhost:${PORT}/health
  ✅ Login Endpoint: http://localhost:${PORT}/login
  
  📚 API ENDPOINTS:
  - Merchants: http://localhost:${PORT}/api/dube/international/getmerchantlist.php
  - Customers: http://localhost:${PORT}/api/dube/international/getcustomerlist.php
  - Invoices: http://localhost:${PORT}/api/dube/international/getallinvoices.php
  - WFP Categories: http://localhost:${PORT}/api/wfp/getcategories.php
  `);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});

// Export for testing
module.exports = app;
