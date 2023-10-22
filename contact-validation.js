document.getElementById("contact-form").addEventListener("submit", function (event) {
    var name = document.getElementById("your-name").value;
    var email = document.getElementById("your-email").value;
    var phone = document.getElementById("your-phone").value;
    var message = document.getElementById("your-message").value;
    var namePattern = /^[A-Za-z\s]+$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phonePattern = /^[0-9]+$/;

    var isValid = true;

    if (!name.match(namePattern)) {
        document.getElementById("name-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("name-error").style.display = "none";
    }

    if (!email.match(emailPattern)) {
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("email-error").style.display = "none";
    }

    if (!phone.match(phonePattern)) {
        document.getElementById("phone-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("phone-error").style.display = "none";
    }

    if (message.trim() === "") {
        document.getElementById("message-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("message-error").style.display = "none";
    }

    if (!isValid) {
        event.preventDefault();
    }
});
