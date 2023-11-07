const form = document.getElementById("registration-form");

form.addEventListener("submit", function (event) {
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }

    if (!validatePassword(password)) {
        alert("Password must be at least 8 characters long.");
        event.preventDefault();
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}
