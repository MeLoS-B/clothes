
let cart = JSON.parse(localStorage.getItem("cart")) || [];


const cartItemsDiv = document.getElementById("cartItems");
const totalPriceSpan = document.getElementById("totalPrice");
const totalItemsSpan = document.getElementById("totalItems");


function renderCart() {
  cartItemsDiv.innerHTML = '';
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = `
    <div class="flex items-center justify-center flex-col">
     <p class="text-gray-500 text-center text-lg">Your cart is empty.</p><a href="/">Go home</a>
    </div>

    
    `;
    totalPriceSpan.innerText = '0.00';
    totalItemsSpan.innerText = '0';
    return;
  }

  let total = 0;
  let totalItems = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    totalItems += item.quantity;

    const itemDiv = document.createElement('div');
    itemDiv.className = 'flex items-center justify-between  p-4 rounded-xl shadow hover:shadow-lg transition';

    itemDiv.innerHTML = `
  <a href="/src/pages/product-single-page.html?id=${item.id}" class="flex items-center gap-4">
    <img src="${item.img}" class="w-24 h-24 object-cover rounded-lg"/>
    <div>
      <h3 class="font-semibold text-lg">${item.name}</h3>
      <p class="text-gray-500 text-sm">Price: $${item.price}</p>
      <p class="text-gray-500 text-sm">Quantity: ${item.quantity}</p>
    </div>
  </a>

  <button class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition" onclick="deleteItem(${index})">
    Delete
  </button>
`;


    cartItemsDiv.appendChild(itemDiv);
  });

  totalPriceSpan.innerText = total.toFixed(2);
  totalItemsSpan.innerText = totalItems;
}


function deleteItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

window.deleteItem = deleteItem; 



renderCart();
