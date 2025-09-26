
const params = new URLSearchParams(window.location.search);
const name = params.get("name");


const product = products.find((p) => p.name === name);


const container = document.getElementById("product-details");
const mainImage = document.getElementById("main-image");
const thumbnailContainer = document.getElementById("thumbnails");


if (product) {

    container.innerHTML = `
    <h1 class="fw-bold mb-3 mt-5">${product.name}</h1>
    <h4 class="text-danger">$${product.price}</h4>

    <p class="my-4 text-muted">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
    </p>

    <h6>Color</h6>
    <div class="d-flex mb-3">
      ${product.colors.map(
        (color) => `<span class="color-circle" style="background-color: ${color};"></span>`
    ).join("")}
    </div>

    <div class="d-flex align-items-center mb-4">
      <button class="btn btn-outline-secondary">-</button>
      <input type="text" class="form-control mx-2 text-center" value="1" style="width: 60px;" />
      <button class="btn btn-outline-secondary">+</button>
    </div>

    <div class="d-flex gap-2">
      <button class="btn btn-dark w-50">ADD TO CART</button>
      <button class="btn btn-outline-secondary wishlist-btn" id="add-to-wishlist">
        <i class="bi bi-heart"></i>
      </button>
    </div>

    <button class="btn btn-primary w-100 mt-3" style="background-color: #ff2c84; border: none;">BUY NOW</button>
  `;

    const minusBtn = container.querySelector(".btn-outline-secondary:first-child");
    const plusBtn = container.querySelector(".btn-outline-secondary:last-child");
    const quantityInput = container.querySelector("input");

    minusBtn.addEventListener("click", () => {
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            quantityInput.value = value - 1;
        }
    });

    plusBtn.addEventListener("click", () => {
        let value = parseInt(quantityInput.value);
        quantityInput.value = value + 1;
    });



    mainImage.src = product.image;


    const galleryImages = product.gallery || [product.image];
    thumbnailContainer.innerHTML = galleryImages
        .map(
            (img, index) => `
        <img src="${img}" class="thumbnail-img ${index === 0 ? "active" : ""}" />`
        )
        .join("");


    const thumbnails = document.querySelectorAll(".thumbnail-img");
    thumbnails.forEach((thumb) => {
        thumb.addEventListener("click", function () {
            mainImage.src = this.src;
            thumbnails.forEach((t) => t.classList.remove("active"));
            this.classList.add("active");
        });
    });


    const btn = document.getElementById("add-to-wishlist");
    if (btn) {
        btn.addEventListener("click", () => {
            if (!wishlist.find((item) => item.name === product.name)) {
                wishlist.push(product);
                saveWishlist();
            }
            openWishlistModal();
        });
    }
} else {
    container.innerHTML = `<p class="text-danger">Product not found.</p>`;
}


let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function saveWishlist() {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function openWishlistModal() {
    const wishlistContainer = document.getElementById("wishlist-items");
    const countSpan = document.getElementById("wishlist-count");

    countSpan.textContent = wishlist.length;
    wishlistContainer.innerHTML = "";

    wishlist.forEach((product) => {
        wishlistContainer.innerHTML += `
      <div class="d-flex justify-content-between align-items-center border-bottom py-2">
        <div class="d-flex align-items-center">
          <img src="${product.image}" alt="${product.name}" width="60" class="me-3">
          <div>
            <strong>${product.name}</strong><br>
            <small class="text-muted">$${product.price}</small><br>
            <small>${new Date().toLocaleDateString()}</small>
          </div>
        </div>
        <button class="btn btn-pink">Select options</button>
      </div>
    `;
    });

    const modal = new bootstrap.Modal(document.getElementById("wishlistModal"));
    modal.show();
}