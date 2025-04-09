import express from 'express';
import { User } from '../../models/userdata.js';
import bcrypt from 'bcryptjs'; // Add bcrypt
import jwt from 'jsonwebtoken'

const router = express.Router();

// POST /api/user/login
router.post('/login', async (req, res) => {
    try {
     
      const { username, password } = req.body;
     
      const user = await User.findOne({
       
        where: { username } });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid username' });
      }
  
      // Compare the plain password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password_hash);
    
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      const token =jwt.sign({username:user.username},'secret',{expiresIn:'1h'})
  
      return res.status(200).json({ message: 'Login successful', username: user.username,token:token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error during login' });
    }
  });

export default router;
