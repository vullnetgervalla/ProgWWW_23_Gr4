const form = document.querySelector("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");

form.addEventListener("submit", (event) => {
    function isNameValid(name) {
        return /^[a-zA-Z]+$/.test(name);
    }

    function isEmailValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    if (!isNameValid(firstname.value)) {
        alert("Please enter a valid first name");
        event.preventDefault();
    }

    if (!isNameValid(lastname.value)) {
        alert("Please enter a valid last name");
        event.preventDefault();
    }

    if (!isEmailValid(email.value)) {
        alert("Please enter a valid email address");
        event.preventDefault();
    }
});
