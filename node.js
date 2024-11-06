// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse form data sent in the POST request
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files like HTML, CSS, and JavaScript from the 'public' folder
app.use(express.static('public'));

// Handle the form submission from the contact form on the client-side
app.post('/send', (req, res) => {
    // Extract the 'name' and 'email' from the form data
    const { name, email } = req.body;

    // Log the data to the console (this can be replaced with sending an email or saving to a database)
    console.log(`Name: ${name}, Email: ${email}`);

    // Respond to the client with a thank you message
    res.send("Thank you for your submission!");
});

// Start the server and listen on port 3000
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
