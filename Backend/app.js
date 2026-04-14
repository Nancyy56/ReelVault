const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const app = express();
const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());

// Handle POST request to get reel by full URL
app.post('/get-reel', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const options = {
    method: 'GET',
    url: 'https://instagram-premium-api-2023.p.rapidapi.com/v1/media/by/url',
    params: { url },
    headers: {
      'x-rapidapi-key': `${process.env.API_KEY}`,
      'x-rapidapi-host': 'instagram-premium-api-2023.p.rapidapi.com',
      'x-access-key': `${process.env.API_KEY}`
    }
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch reel from API" });
  }
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
