document.addEventListener("DOMContentLoaded", () => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const container = document.getElementById("wishlist-container");

  function renderWishlist() {
    container.innerHTML = "";

    if (wishlist.length === 0) {
      container.innerHTML = '<p class="text-muted">Your wishlist is empty.</p>';
      return;
    }

    wishlist.forEach((product, index) => {
      const card = document.createElement("div");
      card.className = "d-flex justify-content-between align-items-center border p-3 mb-3";

      card.innerHTML = `
        <div class="d-flex align-items-center">
          <button class="btn btn-sm btn-link text-muted me-3 remove-item" data-index="${index}"><i class="bi bi-x"></i></button>
          <a href="product.html?name=${encodeURIComponent(product.name)}" class="d-flex align-items-center text-decoration-none text-dark">
            <img src="${product.image}" alt="${product.name}" width="60" class="me-3">
            <div>
              <strong>${product.name}</strong><br>
              <span class="text-muted">$${product.price}</span><br>
              <small>${new Date().toLocaleDateString()}</small>
            </div>
          </a>
        </div>
        <button class="btn btn-pink">Select options</button>
      `;

      container.appendChild(card);
    });

    document.querySelectorAll(".remove-item").forEach(button => {
      button.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        wishlist.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
      });
    });
  }

  renderWishlist();
});
