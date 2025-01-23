const express = require('express');
const app = express();

// Define a route for '/'
app.get('/', (req, res) => {
    res.send('Hello from Node.js!');
});

// Example: Define another API route
app.get('/api', (req, res) => {
    res.send({ message: 'API response from Node.js!' });
});

const PORT = 3001; // or 3002
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

