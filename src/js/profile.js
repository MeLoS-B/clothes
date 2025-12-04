document.addEventListener("DOMContentLoaded", () => {
  const displayName = document.getElementById("displayName");
  const displayEmail = document.getElementById("displayEmail");
  const cartCount = document.getElementById("cartCount");
  const likedCount = document.getElementById("likedCount");
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const profileForm = document.getElementById("profileForm");
  const logoutBtn = document.getElementById("logoutBtn");

  
  let user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    alert("You must be logged in to access the profile.");
    window.location.href = "/auth/login.html";
    return;
  }


  function updateUserInfoDisplay() {
    displayName.textContent = user.name;
    displayEmail.textContent = user.email || "";

  
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const liked = JSON.parse(localStorage.getItem("likedProducts")) || [];
    cartCount.textContent = cart.filter(p => p.userId === user.id).length;
    likedCount.textContent = liked.filter(p => p.userId === user.id).length;
  }

  nameInput.value = user.name;
  emailInput.value = user.email || "";
  passwordInput.value = "";

  updateUserInfoDisplay();

  
  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newName = nameInput.value.trim();
    const newEmail = emailInput.value.trim();
    const newPassword = passwordInput.value.trim();

    if (!newName || !newEmail) {
      alert("Please fill in name and email.");
      return;
    }

    user.name = newName;
    user.email = newEmail;
    if (newPassword) user.password = newPassword;

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    updateUserInfoDisplay();
    alert("Profile updated ");
    passwordInput.value = "";
  });


  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/auth/login.html";
  });
});
