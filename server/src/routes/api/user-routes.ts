import express from 'express';
import { User } from '../../models/userdata';

const router = express.Router();

// POST /api/user/login
router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = await User.findOne({ where: { username } });
  
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      return res.status(200).json({ message: 'Login successful', username: user.username });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error during login' });
    }
  });
  

export default router;
