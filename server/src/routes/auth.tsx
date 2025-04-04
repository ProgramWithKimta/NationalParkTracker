// server/routes/auth.js

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');  // Adjust this import if you have a User model

const router = express.Router();

// POST route for login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Compare the password with the hashed password in the DB
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generate a JWT token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    'your_jwt_secret_key',  // This should be stored securely, e.g., in environment variables
    { expiresIn: '1h' }
  );

  res.json({ token });
});

module.exports = router;
