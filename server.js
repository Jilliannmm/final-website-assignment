// server.js

// Import Express and initialize the app
const express = require('express');
const app = express();

// Middleware to parse URL-encoded data (data from HTML forms)
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, etc.) from the current directory
app.use(express.static(__dirname));

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    // Extract data from the form using req.body
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;

    // Log the data to the console (this can later be used for further processing)
    console.log(`Form submission received! Name: ${name}, Phone: ${phone}, Email: ${email}`);

    // Send a response back to the client
    res.send("Thank you for your submission, " + name + "!");
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
