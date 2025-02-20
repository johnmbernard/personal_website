function subscribe() {
    let email = document.getElementById("email").value;
    if (email) {
        alert("Thank you for subscribing with: " + email);
        document.getElementById("email").value = ""; // Clear input field
    } else {
        alert("Please enter a valid email.");
    }
}