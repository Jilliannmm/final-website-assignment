const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (like HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// POST route to handle form submissions
app.post('/send', (req, res) => {
    // Your code for handling the form submission goes here
    res.send("Form submitted!");
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
