// JavaScript Code for Form Validation

function validateForm() {
    // Get values from the form fields
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Validate if any field is empty
    if (name === "" || phone === "" || email === "") {
        alert("Please fill out all fields.");
        return false; // Prevent form submission
    }

    // Check if the phone number is valid (basic validation)
    const phonePattern = /^[0-9]{10}$/; // Example: 1234567890
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number.");
        return false; // Prevent form submission
    }

    // Optionally, you could add more validation for email, etc.

    // If everything is valid, allow form submission
    alert("Form submitted successfully!");
    return true;
}
