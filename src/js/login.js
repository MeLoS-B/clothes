const logInBtn = document.getElementById("logInBtn");

logInBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!foundUser) {
    alert("Email or password incorrect");
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

  // Redirect
  window.location.href = "./index.html";
});
