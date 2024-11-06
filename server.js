// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Initialize the Express app
const app = express();

// Middleware to serve static files and parse request body
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to handle form submission
app.post('/send', (req, res) => {
    const { name, phone, email } = req.body;

    // Set up Nodemailer for email transport
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Or use any other service provider
        auth: {
            user: 'your-email@gmail.com',      // Replace with your email
            pass: 'your-email-password'        // Replace with your email password
        }
    });

    // Set up email data
    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com',           // Replace with your receiving email
        subject: 'New Contact Form Submission',
        text: `You have a new contact form submission from:
               Name: ${name}
               Phone: ${phone}
               Email: ${email}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending message.');
        } else {
            console.log('Message sent: %s', info.messageId);
            res.status(200).send('Message sent successfully.');
        }
    });
});

// Set up the server to listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
