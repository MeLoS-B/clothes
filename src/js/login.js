const logInBtn = document.getElementById("logInBtn");

logInBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Get users from localStorage (array)
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Find if user exists
  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!foundUser) {
    alert("Email or password incorrect!");
    return;
  }

  // Save logged-in user
  localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

  // Redirect
  window.location.href = "/index.html";
});
