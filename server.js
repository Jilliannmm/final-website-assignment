// Import the Express module
const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files from the "public" folder
app.use(express.static('public'));

// Middleware to parse JSON bodies (for form submissions)
app.use(express.json());

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, phone, email } = req.body; // Extract form data
    console.log('Form data received:', { name, phone, email }); // Log form data to the console
    res.send('Form submitted successfully!'); // Send success message to the client
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
