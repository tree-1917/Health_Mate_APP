const express = require('express');
const app = express();

// Simple endpoint to return the version
app.get('/version', (req, res) => {
  res.json({ version: 'blockv0.0' });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

