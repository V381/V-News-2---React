const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors())

app.get('/api/top-headlines-serbia', async (req, res) => {
  try {
    const url = 'https://newsapi.org/v2/top-headlines?' +
      'country=rs&' +
      'apiKey=65f5bf5de3ce404c853c0aac623504d6';

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
