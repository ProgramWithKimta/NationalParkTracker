import { Router } from 'express';
import fetch from 'node-fetch';

const router = Router();

router.get('/parks', async (req, res) => {
    const { q = '', limit = '50', start = '0', sort = 'fullName' } = req.query;
  
    try {
      const apiUrl = `https://developer.nps.gov/api/v1/parks?limit=${limit}&start=${start}&q=${q}&sort=${sort}`;
      console.log("API URL:", apiUrl); 
      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${process.env.NPS_API_KEY || ''}`,
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

export default router;