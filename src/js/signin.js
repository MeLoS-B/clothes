const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const termsCheckbox = document.getElementById("acceptTerms");
const submitSignIn = document.getElementById("submitSignIn");

// REGEX
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
const phoneRegex = /^(?:\+383|0)?(4[3-9]|[1-2][4-9])[0-9]{6}$/;

// VALIDATION LISTENERS
passwordInput.addEventListener("input", () => {
  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.textContent =
      "Password must have 8 chars, uppercase, number & special char.";
  } else {
    passwordError.textContent = "";
  }
});

emailInput.addEventListener("input", () => {
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Invalid email";
  } else {
    emailError.textContent = "";
  }
});

phoneInput.addEventListener("input", () => {
  if (!phoneRegex.test(phoneInput.value)) {
    phoneError.textContent = "Wrong number";
  } else {
    phoneError.textContent = "";
  }
});

// REGISTER BUTTON
submitSignIn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();
  const phone = phoneInput.value.trim();
  const address = addressInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // BASIC VALIDATION
  if (!name || !surname || !phone || !address || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  if (!termsCheckbox.checked) {
    alert("Duhet të pranoni termat dhe kushtet!");
    return;
  }

  if (
    emailError.textContent ||
    passwordError.textContent ||
    phoneError.textContent
  ) {
    alert("Fix the errors before submitting!");
    return;
  }

  // READ EXISTING USERS
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // CHECK IF USER ALREADY EXISTS
  if (users.some((user) => user.email === email)) {
    alert("Ky email ekziston tashmë!");
    return;
  }

  // CREATE NEW USER
  const newUser = {
    name,
    surname,
    phone,
    address,
    email,
    password,
  };

  users.push(newUser);

  // SAVE TO LOCALSTORAGE
  localStorage.setItem("users", JSON.stringify(users));

  alert("Llogaria u krijua me sukses!");

  window.location.href = "/public/auth/login.html";
});
