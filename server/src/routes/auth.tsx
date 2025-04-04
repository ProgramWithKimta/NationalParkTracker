// server/routes/auth.ts
import { models } from '../models'; 
import express, { Request, Response } from 'express';  // Importing types
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Userdata from '../models/userdata';  // Adjust this import if needed

const router = express.Router();

// POST route for login
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await Userdata.findOne({ where: { email } });

    if (!user) {
      // Return a response immediately if user not found
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the password with the hashed password in the DB
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      // Return a response immediately if password doesn't match
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'your_jwt_secret_key',  // It's safer to use environment variables for secrets
      { expiresIn: '1h' }
    );

    // Return the token as a JSON response
    return res.json({ token });  // Correct usage of 'res'
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });  // Handle error
  }
});

export default router;
