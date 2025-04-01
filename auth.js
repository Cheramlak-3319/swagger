const jwt = require('jsonwebtoken');
const SECRET = 'your-secret-key';

const users = [
  { id: 1, username: 'admin', password: 'admin', role: 'admin' },
  { id: 2, username: 'user', password: 'user', role: 'user' }
];

module.exports = {
  authenticate: (req, res) => {
    // Add validation for request body
    if (!req.body || !req.body.username || !req.body.password) {
      return res.status(400).json({ 
        error: true, 
        message: 'Username and password are required' 
      });
    }

    const { username, password } = req.body;
    
    // Find user - now using the actual input values
    const user = users.find(u => 
      u.username === username && 
      u.password === password
    );
    
    if (!user) {
      return res.status(401).json({ 
        error: true, 
        message: 'Invalid username or password' 
      });
    }
    
    const token = jwt.sign(
      { userId: user.id, username: user.username, role: user.role },
      SECRET,
      { expiresIn: '1h' }
    );
    
    res.json({ token });
  },
  
  verifyToken: (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ 
        error: true, 
        message: 'Authorization token is required' 
      });
    }
    
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ 
          error: true, 
          message: 'Invalid or expired token' 
        });
      }
      req.user = user;
      next();
    });
  }
};