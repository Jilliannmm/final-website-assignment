// JavaScript Code for Form Validation and Interactivity

// Form validation for the Contact page
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === "" || email === "") {
        alert("Please fill out all fields.");
        return false;
    }
    return true;
}

// Toggle visibility of an element
function toggleContent() {
    const content = document.getElementById('extra-content');
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

// Add an event listener for a button click (for toggle)
document.getElementById('toggle-button').addEventListener('click', toggleContent);
