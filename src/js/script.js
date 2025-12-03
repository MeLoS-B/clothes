


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


const stock = 100;
const sold = 80;
const soldPercentage = (sold / stock) * 100


// const progressBar = document.getElementById("progressBar").style.width = soldPercentage + "%"
// const stockText = document.getElementById("stockText").innerHTML = `Already sold: ${sold}`


// const hourText = document.getElementById("hourText");
// const minutesText = document.getElementById("minutesText");
// const secondText = document.getElementById("secondText");

// const endTime = new Date().getTime() + 3 * 60 * 60 * 1000

// const updateCountDown = () => {
//    const now = new Date().getTime();
//    const timeLeft = endTime - now;

//    if (timeLeft <= 0) {
//       offerText.textContent = "Offer Ended";
//       clearInterval(timer);
//       return;
//     }

//     const hours = Math.floor((timeLeft / (1000 * 60* 60)) % 24);
//     const minutes = Math.floor((timeLeft / (1000 * 60 )) % 60 );
//     const seconds  = Math.floor((timeLeft / 1000) % 60);
//     hourText.innerHTML = ` ${hours} Hours  `
//     minutesText.innerHTML = ` ${minutes} Min`
//     secondText.innerHTML = `   ${seconds} Sec`
// }
// updateCountDown();
// const timer = setInterval(updateCountDown, 1000)


const leftSideMenuBtn = document.getElementById("leftSideMenuBtn");
const leftSideMenu = document.getElementById("leftSideMenu");
leftSideMenuBtn.addEventListener("click", () => {
    leftSideMenu.classList.remove("hidden");
   
    
});

const closeLeftSideMenu = document.getElementById("closeLeftSideMenu");
closeLeftSideMenu.addEventListener("click", () => {
    leftSideMenu.classList.add("hidden");
});

const categoryDropDown  = document.querySelectorAll("#categoryDropDown");
const categoryPM = document.querySelectorAll("#categoryPM");
const categoryDiv = document.querySelectorAll("#categoryDiv");


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

leftSideWeb.addEventListener("click", () => {
  leftSideContent.classList.remove("hidden");
  
})
closeCategories.addEventListener("click", () => {
   leftSideContent.classList.add("hidden");
})







document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const userNameEl = document.getElementById("userName");
  const profileIcons = document.getElementById("profileIcons");
  const logOutBtn = document.getElementById("logOutBtn");

  if (user) {
    // Show username
    userNameEl.textContent = user.name;
    userNameEl.classList.remove("hidden");

    // Hide the profile icon
    profileIcons.querySelector("#profileUser").classList.add("hidden");

    // Show logout button
    logOutBtn.classList.remove("hidden");


   
  } else {
    // User not logged in
    userNameEl.textContent = "";
    userNameEl.classList.add("hidden");

    profileIcons.querySelector("#profileUser").classList.remove("hidden");
    logOutBtn.classList.add("hidden");
  }
});






 logOutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/auth/login.html"; 
  });





// Save products to localStorage if not already there
if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify([
    { id: "1", name: "Jacket", price: 48, oldPrice: 75, description: "Mens Winter Leather Jackets", img: "/src/images/newproducts/jacket-1.jpg", rating: 3 },
    { id: "2", name: "Coat", price: 60, oldPrice: 90, description: "Stylish Winter Coat", img: "/src/images/newproducts/jacket-1.jpg", rating: 4 },
    { id: "3", name: "Shirt", price: 120, oldPrice: 50, description: "Casual Shirt", img: "/src/images/newproducts/jacket-1.jpg", rating: 5 },
    { id: "4", name: "Jeans", price: 70, oldPrice: 50, description: "Casual Shirt", img: "/src/images/newproducts/jacket-1.jpg", rating: 5 },
    { id: "5", name: "T-shirt", price: 30, oldPrice: 50, description: "Casual Shirt", img: "/src/images/newproducts/jacket-1.jpg", rating: 5 },
    { id: "6", name: "Shirt", price: 100, oldPrice: 50, description: "Casual Shirt", img: "/src/images/newproducts/jacket-1.jpg", rating: 5 },
    { id: "7", name: "Shirt", price: 100, oldPrice: 50, description: "Casual Shirt", img: "/src/images/newproducts/jacket-1.jpg", rating: 5 },
  ]));
}

// Get products from localStorage
const products = JSON.parse(localStorage.getItem("products"));

// Generate stars HTML
function getStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) stars += '<i class="fa-solid fa-star text-yellow-400"></i> ';
    else stars += '<i class="fa-regular fa-star text-yellow-400"></i> ';
  }
  return stars;
}

// Render products
function renderProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'border border-gray-200 w-[80%] flex flex-col items-center p-2 rounded-[10px] group relative bg-white';

    card.innerHTML = `
      <img class="w-[180px] cursor-pointer" src="${product.img}" alt="${product.name}" onclick="viewProduct('${product.id}')"/>
      <div class="text-center mt-2">
        <h2 class="text-pink-400">${product.name}</h2>
        <p class="text-[15px] text-gray-500">${product.description}</p>
        <div class="text-[14px] mb-2">${getStars(product.rating)}</div>
        <p class="font-semibold">$${product.price} <span class="line-through text-gray-400 font-light ml-1">$${product.oldPrice}</span></p>
      </div>
      <div class="transition delay-100 duration-300 ease-in-out hidden absolute top-5 right-2 group-hover:flex flex-col items-center gap-3">
        <i class="fa-regular fa-heart border-[1px] border-gray-200 p-[5px] rounded-[4px]" onclick="addToLiked('${product.id}')"></i>
        <i class="fa-solid fa-eye border-[1px] border-gray-200 p-[5px] rounded-[4px]" onclick="viewProduct('${product.id}')"></i>
        <i class="fa-solid fa-shuffle border-[1px] border-gray-200 p-[5px] rounded-[4px]"></i>
        <i class="fa-solid fa-cart-shopping border-[1px] border-gray-200 p-[5px] rounded-[4px]" onclick="addToCart('${product.id}')"></i>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Add to cart
window.addToCart = function(id) {
  const product = products.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity += 1;
  else cart.push({ ...product, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
};

// Add to liked
window.addToLiked = function(id) {
  let liked = JSON.parse(localStorage.getItem("likedProducts")) || [];
  const product = products.find(p => p.id === id);
  const exists = liked.find(item => item.id === id);
  if (!exists) {
    liked.push(product);
    localStorage.setItem("likedProducts", JSON.stringify(liked));
    alert(`${product.name} added to favorites ❤️`);
  } else {
    alert("Already in favorites!");
  }
};

// View product
window.viewProduct = function(id) {
  window.location.href = `/src/pages/product-single-page.html?id=${id}`;
};

// Initial render
renderProducts();









   const newProducts = [
    { id: "1", name: "Leather Jacket", category: "Clothes", price: 48, oldPrice: 75, img: "/src/images/newproducts/jacket-1.jpg", rating: 4 },
    { id: "2", name: "Winter Coat", category: "Clothes", price: 60, oldPrice: 90, img: "/src/images/newproducts/jacket-1.jpg", rating: 5 },
    { id: "3", name: "Sneakers", category: "Footwear", price: 120, oldPrice: 150, img: "/src/images/newproducts/jacket-1.jpg", rating: 5 },
    { id: "4", name: "Gold Ring", category: "Jewelry", price: 70, oldPrice: 100, img: "/src/images/newproducts/jacket-1.jpg", rating: 4 },
    { id: "5", name: "Lipstick Set", category: "Cosmetics", price: 30, oldPrice: 50, img: "/src/images/newproducts/jacket-1.jpg", rating: 5 },
  ];

  // Save to localStorage
  localStorage.setItem('products', JSON.stringify(newProducts));

  // Render products
  function renderNewProducts(filterCategory = null) {
    const grid = document.getElementById('productGridOne');
    grid.innerHTML = '';

    const productsFromStorage = JSON.parse(localStorage.getItem('products')) || [];
    let filtered = filterCategory && filterCategory !== "All" 
      ? productsFromStorage.filter(p => p.category === filterCategory) 
      : productsFromStorage;

    filtered.forEach(product => {
      const card = document.createElement('div');
      card.className = 'border border-gray-200 w-[80%] flex flex-col items-center p-2 rounded-[10px] bg-white';
      card.innerHTML = `
        <img class="w-[180px] cursor-pointer" src="${product.img}" alt="${product.name}" />
        <div class="text-center mt-2">
          <h2 class="text-pink-400">${product.name}</h2>
          <p class="text-[15px] text-gray-500">${product.category}</p>
          <p class="font-semibold">$${product.price} <span class="line-through text-gray-400 font-light ml-1">$${product.oldPrice}</span></p>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Render dynamic category counts
  function renderCategoryCounts() {
    document.querySelectorAll('.category-item').forEach(item => {
      const category = item.dataset.category;
      const productsFromStorage = JSON.parse(localStorage.getItem('products')) || [];
      const count = category === "All" 
        ? productsFromStorage.length 
        : productsFromStorage.filter(p => p.category === category).length;
      const content = item.nextElementSibling;
      content.innerHTML = `<p>${count} products</p>`;
    });
  }

  // Initial render
  renderNewProducts();
  renderCategoryCounts();

  // Category toggle + filter
  document.querySelectorAll('.category-item').forEach(item => {
    const btn = item.querySelector('.toggle-btn');
    const content = item.nextElementSibling;

    item.addEventListener('click', () => {
      // Toggle dropdown
      content.classList.toggle('hidden');
      btn.textContent = content.classList.contains('hidden') ? '+' : '-';

      // Filter products by category
      const category = item.dataset.category;
      renderNewProducts(category);
    });
  });