

window.allProducts = [
    { id: "1", name: "Jacket", category: "Clothes", price: 230, oldPrice: 55, description: "Mens Winter Leather Jackets", img: "./src/images/newproducts/jacket-1.jpg", rating: 3 },
    { id: "2", name: "Jeans", category: "Men", price: 230, oldPrice: 55, description: "Mens Winter Leather Jackets", img: "./src/images/newproducts/jacket-1.jpg", rating: 3 },
    { id: "3", name: "Jacket", category: "Women", price: 230, oldPrice: 55, description: "Mens Winter Leather Jackets", img: "./src/images/newproducts/jacket-1.jpg", rating: 3 },
    { id: "4", name: "Jacket", category: "Footwear", price: 230, oldPrice: 55, description: "Mens Winter Leather Jackets", img: "./src/images/newproducts/jacket-1.jpg", rating: 3 },
    { id: "5", name: "Jacket", category: "Cosmetics", price: 230, oldPrice: 55, description: "Mens Winter Leather Jackets", img: "./src/images/newproducts/jacket-1.jpg", rating: 3 },
    { id: "6", name: "Jacket", category: "Jewerly", price: 230, oldPrice: 55, description: "Mens Winter Leather Jackets", img: "./src/images/newproducts/jacket-1.jpg", rating: 3 },
    { id: "7", name: "Jacket", category: "Men", price: 230, oldPrice: 55, description: "Mens Winter Leather Jackets", img: "./src/images/newproducts/jacket-1.jpg", rating: 3 },
]

localStorage.setItem("allProducts", JSON.stringify(allProducts))

const params = new URLSearchParams(window.location.search);
const initialCategory = params.get("category") || "All";



function renderAllProducts(category){


    const productsGrid = document.getElementById("productGrid")
    const allProducts = JSON.parse(localStorage.getItem("allProducts"))

    productsGrid.innerHTML = ""


    const filtered = category && category !=="All" ? allProducts.filter((product) => product.category == category) : allProducts

    filtered.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'border border-gray-200 w-[80%] flex flex-col items-center p-2 rounded-[10px] relative group bg-white';
        card.innerHTML += `
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
        `
        productsGrid.appendChild(card)
    })






}

document.querySelectorAll(".category-btn").forEach((item) => {

    item.addEventListener("click", () => {
          const category = item.dataset.category
          renderAllProducts(category)

    })
  
})


window.addToCart = function(id) {
    let productArr = JSON.parse(localStorage.getItem("allProducts") || [])
    let product = productArr.find((prod) => prod.id == id)

    let cart = JSON.parse(localStorage.getItem("cart") || [])
    const existing = cart.find((prod) => prod.id == id)
    if(existing) existing.quantity +=1
    else cart.push({...product,quantity:1})

    localStorage.setItem("cart", JSON.stringify(cart))

    alert(`${product.name} added to cart!`);


}

window.addToLiked = function(id) {
  
  let liked = [];
  try {
    const stored = localStorage.getItem("likedProducts");
    liked = stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.error("Error parsing likedProducts:", err);
    liked = []; 
  }

  const productsArr = JSON.parse(localStorage.getItem("products")) || [];
  const product = productsArr.find(p => p.id === id);
  
  if (!product) return;

  const existing = liked.find(item => item.id === id);

  if (!existing) {
    liked.push(product);
    localStorage.setItem("likedProducts", JSON.stringify(liked));
    alert(`${product.name} added to favorites!`);
  } else {
    alert(`${product.name} is already in favorites!`);
  }
};
window.viewProduct = function(id){

    window.location.href = `./src/pages/product-single-page.html?id=${id}`

}


renderAllProducts(initialCategory);
