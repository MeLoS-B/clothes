
const infoCategoriesBtns = document.querySelectorAll("#infoCategoriesBtn");
const infoCategories = document.querySelectorAll("#infoCategories");
const infoCategoriesContents = document.querySelectorAll("#infoCategoriesContent");

infoCategories.forEach((category, index) => {
  category.addEventListener("click", () => {
    const content = infoCategoriesContents[index];
    const btn = infoCategoriesBtns[index];

    if (content.style.display === "flex") {
      content.style.display = "none";
      btn.innerHTML = '+';
    } else {
      content.style.display = "flex";
      btn.innerHTML = '-';
    }
  });
});


const leftSideMenuBtn = document.getElementById("leftSideMenuBtn");
const leftSideMenu = document.getElementById("leftSideMenu");
leftSideMenuBtn.addEventListener("click", () => leftSideMenu.classList.remove("hidden"));

const closeLeftSideMenu = document.getElementById("closeLeftSideMenu");
closeLeftSideMenu.addEventListener("click", () => leftSideMenu.classList.add("hidden"));


const categoryDiv = document.querySelectorAll("#categoryDiv");
const categoryDropDown  = document.querySelectorAll("#categoryDropDown");
const categoryPM = document.querySelectorAll("#categoryPM");

categoryDiv.forEach((category, index) => {
  const content = categoryDropDown[index];
  const btns = categoryPM[index];

  category.addEventListener("click", () => {
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "flex";
      btns.innerHTML = "-";
    } else {
      content.style.display = "none";
      btns.innerHTML = "+";
    }
  });
});

const languageCurrencyDiv = document.querySelectorAll(".languageCurrencyDiv");
const languageCurrencyInfo = document.querySelectorAll(".languageCurrencyInfo");
const caretLeft = document.querySelectorAll(".caretLeft");
const caretBottom = document.querySelectorAll(".caretBottom");

languageCurrencyDiv.forEach((category, index) => {
  category.addEventListener("click", () => {
    const content = languageCurrencyInfo[index];
    const left = caretLeft[index];
    const bottom = caretBottom[index];

    if (content.style.display === "flex") {
      content.style.display = "none";
      left.style.display = "block";
      bottom.style.display = "none";
    } else {
      content.style.display = "flex";
      left.style.display = "none";
      bottom.style.display = "block";
    }
  });
});

const leftSideWeb = document.getElementById("leftSideWeb");
const leftSideContent = document.getElementById("leftSideContent");
const closeCategories = document.getElementById("closeCategories");

leftSideWeb.addEventListener("click", () => leftSideContent.classList.remove("hidden"));
closeCategories.addEventListener("click", () => leftSideContent.classList.add("hidden"));

document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const userNameEl = document.getElementById("userName");
  const profileIcons = document.getElementById("profileIcons");
  const logOutBtn = document.getElementById("logOutBtn");

  if (user) {
    userNameEl.textContent = user.name;
    userNameEl.classList.remove("hidden");
    profileIcons.querySelector("#profileUser").classList.add("hidden");
    logOutBtn.classList.remove("hidden");
  } else {
    userNameEl.textContent = "";
    userNameEl.classList.add("hidden");
    profileIcons.querySelector("#profileUser").classList.remove("hidden");
    logOutBtn.classList.add("hidden");
  }

  logOutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/auth/login.html"; 
  });
});


if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify([
    { id: "1", name: "Jacket", category: "Clothes", price: 48, oldPrice: 75, description: "Mens Winter Leather Jackets", img: "./src/images/newproducts/jacket-1.jpg", rating: 3 },
    { id: "2", name: "Coat", category: "Clothes", price: 60, oldPrice: 90, description: "Stylish Winter Coat", img: "./src/images/newproducts/jacket-1.jpg", rating: 4 },
    { id: "3", name: "Shirt", category: "Clothes", price: 120, oldPrice: 50, description: "Casual Shirt", img: "./src/images/newproducts/jacket-1.jpg", rating: 5 },
    { id: "4", name: "Jeans", category: "Clothes", price: 70, oldPrice: 50, description: "Casual Shirt", img: "./src/images/newproducts/jacket-1.jpg", rating: 5 },
    { id: "5", name: "T-shirt", category: "Clothes", price: 30, oldPrice: 50, description: "Casual Shirt", img: "./src/images/newproducts/jacket-1.jpg", rating: 5 },
    { id: "6", name: "Shirt", category: "Clothes", price: 100, oldPrice: 50, description: "Casual Shirt", img: "./src/images/newproducts/jacket-1.jpg", rating: 5 },
    { id: "7", name: "Shirt", category: "Clothes", price: 100, oldPrice: 50, description: "Casual Shirt", img: "./src/images/newproducts/jacket-1.jpg", rating: 5 },
  ]));
}

const newProducts = [
  { id: "1", name: "Leather Jacket", category: "Clothes", price: 48, oldPrice: 75, img: "./src/images/newproducts/jacket-1.jpg", rating: 4 },
  { id: "2", name: "Winter Coat", category: "Clothes", price: 60, oldPrice: 90, img: "./src/images/newproducts/jacket-1.jpg", rating: 5 },
  { id: "3", name: "Sneakers", category: "Footwear", price: 120, oldPrice: 150, img: "./src/images/newproducts/jacket-1.jpg", rating: 5 },
  { id: "4", name: "Gold Ring", category: "Jewelry", price: 70, oldPrice: 100, img: "./src/images/newproducts/jacket-1.jpg", rating: 4 },
  { id: "5", name: "Lipstick Set", category: "Cosmetics", price: 30, oldPrice: 50, img: "./src/images/newproducts/jacket-1.jpg", rating: 5 },
];
localStorage.setItem('newProducts', JSON.stringify(newProducts));


function getStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) stars += '<i class="fa-solid fa-star text-yellow-400"></i> ';
    else stars += '<i class="fa-regular fa-star text-yellow-400"></i> ';
  }
  return stars;
}


window.addToCart = function(id, isNew = false) {
  const productsArr = JSON.parse(localStorage.getItem(isNew ? "newProducts" : "products")) || "[]";
  const product = productsArr.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity += 1;
  else cart.push({ ...product, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
};

window.addToLiked = function(id, isNew = false) {
  let liked = JSON.parse(localStorage.getItem("likedProducts") || "[]");
  const productsArr = JSON.parse(localStorage.getItem(isNew ? "newProducts" : "products") || "[]");
  const product = productsArr.find(p => p.id === id);
  const exists = liked.find(item => item.id === id);
  if (!exists) {
    liked.push(product);
    localStorage.setItem("likedProducts", JSON.stringify(liked));
    alert(`${product.name} added to favorites ❤️`);
  } else {
    alert("Already in favorites!");
  }
};


window.viewProduct = function(id, isNew = false) {
  window.location.href = `/src/pages/product-single-page.html?id=${id}&new=${isNew ? 1 : 0}`;
};


function renderProducts(filterCategory = null) {
  const productsArr = JSON.parse(localStorage.getItem("products")) || [];
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  const filtered = filterCategory && filterCategory !== "All"
    ? productsArr.filter(p => p.category === filterCategory)
    : productsArr;

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'border border-gray-200 w-[80%] flex flex-col items-center p-2 rounded-[10px] relative group bg-white';
    card.innerHTML = `
      <img class="w-[180px] cursor-pointer" src="${product.img}" alt="${product.name}" onclick="viewProduct('${product.id}')"/>
      <div class="text-center mt-2">
        <h2 class="text-pink-400">${product.name}</h2>
        <p class="text-[15px] text-gray-500">${product.category}</p>
        <div class="text-[14px] mb-2">${getStars(product.rating)}</div>
        <p class="font-semibold">$${product.price} <span class="line-through text-gray-400 font-light ml-1">$${product.oldPrice}</span></p>
      </div>
      <div class="absolute top-2 right-2 hidden flex-col items-center gap-2 group-hover:flex">
        <i class="fa-regular fa-heart border p-1 rounded cursor-pointer" onclick="addToLiked('${product.id}')"></i>
        <i class="fa-solid fa-eye border p-1 rounded cursor-pointer" onclick="viewProduct('${product.id}')"></i>
        <i class="fa-solid fa-cart-shopping border p-1 rounded cursor-pointer" onclick="addToCart('${product.id}')"></i>
      </div>
    `;
    grid.appendChild(card);
  });
}


function renderNewProducts(filterCategory = null) {
  const productsArr = JSON.parse(localStorage.getItem("newProducts")) || [];
  const grid = document.getElementById('productGridOne');
  grid.innerHTML = '';

  const filtered = filterCategory && filterCategory !== "All"
    ? productsArr.filter(p => p.category === filterCategory)
    : productsArr;

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'border border-gray-200 w-[80%] flex flex-col items-center p-2 rounded-[10px] relative group bg-white';
    card.innerHTML = `
      <img class="w-[180px] cursor-pointer" src="${product.img}" alt="${product.name}" onclick="viewProduct('${product.id}', true)"/>
      <div class="text-center mt-2">
        <h2 class="text-pink-400">${product.name}</h2>
        <p class="text-[15px] text-gray-500">${product.category}</p>
        <p class="font-semibold">$${product.price} <span class="line-through text-gray-400 font-light ml-1">$${product.oldPrice}</span></p>
      </div>
      <div class="absolute top-2 right-2 hidden flex-col items-center gap-2 group-hover:flex">
        <i class="fa-regular fa-heart border p-1 rounded cursor-pointer" onclick="addToLiked('${product.id}', true)"></i>
        <i class="fa-solid fa-eye border p-1 rounded cursor-pointer" onclick="viewProduct('${product.id}', true)"></i>
        <i class="fa-solid fa-cart-shopping border p-1 rounded cursor-pointer" onclick="addToCart('${product.id}', true)"></i>
      </div>
    `;
    grid.appendChild(card);
  });
}



function renderCategoryCounts() {
  document.querySelectorAll('.category-item').forEach(item => {
    const category = item.dataset.category;
    const productsArr = JSON.parse(localStorage.getItem("products")) || [];
    const count = category === "All" 
      ? productsArr.length 
      : productsArr.filter(p => p.category === category).length;
    const content = item.nextElementSibling;
    content.innerHTML = `<p>${count} products</p>`;
  });
}



document.querySelectorAll('.category-item').forEach(item => {
  const btn = item.querySelector('.toggle-btn');
  const content = item.nextElementSibling;

  item.addEventListener('click', () => {

    content.classList.toggle('hidden');
    btn.textContent = content.classList.contains('hidden') ? '+' : '-';

    const category = item.dataset.category;
    renderProducts(category);
    renderNewProducts(category);
  });
});


 document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".blog-title").forEach(el => {
      el.addEventListener("click", () => {
        const id = el.dataset.id;
        if (id) window.location.href = `./src/pages/blog-single.html?id=${id}`;
      });
    });
  });


renderProducts();
renderNewProducts();
renderCategoryCounts();
