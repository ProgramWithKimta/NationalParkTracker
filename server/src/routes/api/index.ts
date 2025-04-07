import { Router } from 'express';
import fetch from 'node-fetch';

const router = Router();

// Route to handle park search
router.get('/parks', async (req, res) => {
  const { q = '', stateCode = '', parkCode = '', limit = '50', start = '0', sort = 'fullName' } = req.query;

  try {
    // Construct the API URL with query parameters
    const apiUrl = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&stateCode=${stateCode}&limit=${limit}&start=${start}&q=${q}&sort=${sort}`;
    
    // Fetch data from the NPS API
    const response = await fetch(apiUrl, {
      headers: {
        'X-Api-Key': process.env.NPS_API_KEY || '', 
      },
    });

    // Handle non-OK responses
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch data from NPS API' });
    }

    // Parse and return the data
    const data = await response.json();
    return res.json(data); // Ensure a response is returned
  } catch (error) {
    // Handle errors
    return res.status(500).json({ error: 'An error occurred while fetching park data' }); 
  }
});

export default router;