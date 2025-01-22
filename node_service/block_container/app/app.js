const express = require('express');
const app = express();

// Simple endpoint to return the version
app.get('/version', (req, res) => {
  res.json({ version: 'blockv0.0' });
});

// In your Node.js app (e.g., app.js or server.js)
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

