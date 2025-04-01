const express = require('express');
const cors = require('cors');
const path = require('path');
const serverless = require('serverless-http');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const auth = require('../auth');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

// Authentication endpoint
app.post('/api/authenticate', auth.authenticate);

// Protected route example
app.get('/api/protected', auth.verifyToken, (req, res) => {
  res.json({ 
    message: 'Protected data accessed successfully',
    user: req.user 
  });
});

// Swagger UI protection middleware
const swaggerAuthMiddleware = (req, res, next) => {
  // Allow access to authenticate endpoint
  if (req.path === '/api/authenticate' || req.path === '/.netlify/functions/api/authenticate') {
    return next();
  }
  
  // Allow access to Swagger UI assets
  if (req.path.startsWith('/api-docs') || req.path.startsWith('/.netlify/functions/api/api-docs')) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
      if (req.accepts('html')) {
        return res.send(`
          <h1>Authentication Required</h1>
          <form action="/api/authenticate" method="post">
            <input type="text" name="username" placeholder="Username">
            <input type="password" name="password" placeholder="Password">
            <button type="submit">Login</button>
          </form>
        `);
      }
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    return auth.verifyToken(token, SECRET, (err) => {
      if (err) return res.status(403).json({ error: 'Invalid token' });
      next();
    });
  }
  
  next();
};

// Apply Swagger auth middleware
app.use(swaggerAuthMiddleware);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Swagger UI routes
app.use('/.netlify/functions/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: true, message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/api/api-docs`);
});

module.exports.handler = serverless(app);