//import { Router } from 'express';
import express from "express";
import { commentRouter } from './comment-routes.js';  // No need to add .ts, TypeScript handles it automatically
import userRoutes from './user-routes.js'; // ✅ Import user-routes

const router = express.Router();

router.get('/parks', async (req, res) => {
    const { q = '', limit = '1', start = '0', sort = 'fullName' } = req.query;
  
    try {
      const apiUrl = `https://developer.nps.gov/api/v1/parks?limit=${limit}&start=${start}&q=${q}&sort=${sort}`;
      console.log("API URL:", apiUrl); 
      const response = await fetch(apiUrl, {
        headers: {
          "X-Api-Key":"W3jCR6tphkhfJRbkvFvg4stXQjZ0ZWQi2tpt2k2A",
        },
      });
  
      if (!response.ok) {
        console.error("NPS API Error:", response.statusText); 
        return res.status(response.status).json({ error: 'Failed to fetch data from NPS API' });
      }
  
      const data = await response.json();
      return res.json(data);
    } catch (error) {
      console.error("Error fetching parks:", error);
      return res.status(500).json({ error: 'An error occurred while fetching park data' });
    }
});

router.use('/user', userRoutes);

router.use('/comment', commentRouter);

export default router;