let liked = JSON.parse(localStorage.getItem("likedProducts")) || [];

const likedContainer = document.getElementById("likedContainer");

function renderLiked() {
  likedContainer.innerHTML = "";

  if (liked.length === 0) {
    likedContainer.innerHTML = `
      <p class="text-gray-600 text-center text-lg">
        No liked products yet.
      </p>
    `;
    return;
  }

  liked.forEach((item, index) => {
    const div = document.createElement("div");

    div.className =
      "flex items-center justify-between bg-white p-4 rounded-lg shadow";

   div.innerHTML = `
  <a href="./src/pages/product-single-page.html?id=${item.id}" 
     class="flex items-center gap-4 cursor-pointer">
     
    <img src="${item.img}" class="w-20 h-20 object-cover rounded-lg"/>

    <div>
      <h3 class="font-semibold text-lg">${item.name}</h3>
      <p class="text-gray-600">$${item.price}</p>
    </div>

  </a>

  <button 
    class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
    onclick="deleteLiked(${index})"
  >
    Delete
  </button>
`;


    likedContainer.appendChild(div);
  });
}

function deleteLiked(index) {
  liked.splice(index, 1);
  localStorage.setItem("likedProducts", JSON.stringify(liked));
  renderLiked();
}

window.deleteLiked = deleteLiked;

renderLiked();
