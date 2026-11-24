let password = document.getElementById("password");
let result = document.getElementById("result");

password.addEventListener("input", function() {

    let value = password.value;
let hasUppercase = /[A-Z]/.test(value);
 let hasLowercase = /[a-z]/.test(value);
  let hasNumber = /[0-9]/.test(value);
 let hasSpecial = /[^A-Za-z0-9]/.test(value);

    let score = 0;

if (value.length >= 8) score++;
if (hasUppercase) score++;
if (hasLowercase) score++;
if (hasNumber) score++;
if (hasSpecial) score++;

if (score <= 2) {
    result.innerHTML = "Weak Password";
    result.style.color = "red";
}
else if (score <= 4) {
    result.innerHTML = "Medium Password";
    result.style.color = "orange";
}
else {
    result.innerHTML = "Strong Password";
    result.style.color = "green";
}

});
let togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function() {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.innerHTML = "Hide";
    }
    else {
        password.type = "password";
        togglePassword.innerHTML = "Show";
    }

});