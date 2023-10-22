document.getElementById("contact-form").addEventListener("submit", function (event) {
    var name = document.getElementById("your-name").value;
    var email = document.getElementById("your-email").value;
    var phone = document.getElementById("your-phone").value;
    var message = document.getElementById("your-message").value;
    var namePattern = /^[A-Za-z\s]+$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phonePattern = /^[0-9]+$/;

    var isValid = true;

    // Validasi Nama
    if (!name.match(namePattern)) {
        var nameError = document.getElementById("name-error");
        nameError.textContent = "Name must be in letters";
        nameError.style.display = "block";
        isValid = false;
        alert("Name must be in letters"); // Menampilkan pesan kesalahan
        document.getElementById("your-name").focus();
    } else {
        var nameError = document.getElementById("name-error");
        nameError.style.display = "none";
    }
    
    // Validasi Email
    if (!email.match(emailPattern)) {
        var emailError = document.getElementById("email-error");
        emailError.textContent = "Invalid email";
        emailError.style.display = "block";
        isValid = false;
        alert("Invalid email"); // Menampilkan pesan kesalahan
        document.getElementById("your-email").focus();
    } else {
        var emailError = document.getElementById("email-error");
        emailError.style.display = "none";
    }

    // Validasi Phone
    if (!phone.match(phonePattern)) {
        var phoneError = document.getElementById("phone-error");
        phoneError.textContent = "Phone must be in numbers";
        phoneError.style.display = "block";
        isValid = false;
        alert("Phone must be in numbers"); // Menampilkan pesan kesalahan
        document.getElementById("your-phone").focus();
    } else {
        var phoneError = document.getElementById("phone-error");
        phoneError.style.display = "none";
    }

    // Validasi Message
    if (message.trim() === "") {
        var messageError = document.getElementById("message-error");
        messageError.textContent = "Message must be filled";
        messageError.style.display = "block";
        isValid = false;
        alert("Message must be filled"); // Menampilkan pesan kesalahan
        document.getElementById("your-message").focus();
    } else {
        var messageError = document.getElementById("message-error");
        messageError.style.display = "none";
    }

    if (!isValid) {
        event.preventDefault();
    }
    console.log("Form submitted!");
});
