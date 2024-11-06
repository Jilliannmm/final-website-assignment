const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML, CSS, JS)
app.use(express.static('public'));

// POST route to handle form submissions
app.post('/send', (req, res) => {
    const { name, email } = req.body;

    // You can process the form data here (like sending an email or saving to a database)
    console.log(`Name: ${name}, Email: ${email}`);

    // Send a response back to the user
    res.send("Thank you for your submission!");
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
