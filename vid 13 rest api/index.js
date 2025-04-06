const express = require('express');

const app = express();
const PORT = 8000;

app.use(express.json()); // Middleware to parse JSON request bodies

// GET request - Homepage
app.get('/', (req, res) => {
    res.send('Hello, World! Server is running.');
});

// POST request - Returns JSON with status "pending"
app.post('/status', (req, res) => {
    res.json({ status: "pending" });
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));





//mokaro is a very useful website where we can generate fake data