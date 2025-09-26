window.onload = function () {
  const container = document.getElementById("categories-container");

  let html = `
      <h5 class="mb-4 mt-5" style="letter-spacing: 1px; font-weight: 500;">CATEGORIES</h5>
      <ul class="list-unstyled" id="category-filter">`;

  categories.forEach(cat => {
    html += `
        <li class="d-flex justify-content-between align-items-center mb-2">
          <span class="text-muted">${cat.name}</span>
          <span class="badge rounded-pill bg-light text-dark border">${cat.count}</span>
        </li>`;
  });

  html += `</ul>`;

  html += `
      <div class="mt-5" id="price-filter">
        <h5 class="mb-4" style="letter-spacing: 1px; font-weight: 500;">PRICE</h5>
        <div class="d-flex justify-content-between align-items-center">
          <input type="range" class="form-range" min="0" max="500" step="10" id="maxPrice" style="width: 45%;">
          <input type="range" class="form-range" min="0" max="500" step="10" id="minPrice" style="width: 45%;">
        </div>
        <p class="mt-3 text-muted">
          Range : <span id="priceRange" class="text-dark fw-semibold">$60 - $200</span>
        </p>
      </div>`;

  html += `
      <div class="mt-5" id="color-filter">
        <h5 class="mb-4" style="letter-spacing: 1px; font-weight: 500;">COLOR</h5>
        <ul class="list-unstyled d-flex flex-wrap gap-2">`;

  colors.forEach(color => {
    html += `
        <li class="color-circle" title="${color.name}" style="background-color: ${color.code};"></li>`;
  });

  html += `</ul></div>`;

  html += `
      <div class="mt-5" id="size-filter">
        <h5 class="mb-4" style="letter-spacing: 1px; font-weight: 500;">SIZE</h5>
        <div class="d-flex flex-wrap gap-2">`;

  sizes.forEach(size => {
    html += `<button class="btn btn-outline-secondary" style="min-width: 50px;">${size}</button>`;
  });

  html += `</div></div>`;

  container.innerHTML = html;

  const minInput = document.getElementById("minPrice");
  const maxInput = document.getElementById("maxPrice");
  const priceRangeDisplay = document.getElementById("priceRange");

  minInput.value = 60;
  maxInput.value = 200;

  const updatePriceDisplay = () => {
    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);
    if (min > max) [min, max] = [max, min];
    priceRangeDisplay.textContent = `$${min} - $${max}`;
  };

  minInput.addEventListener("input", updatePriceDisplay);
  maxInput.addEventListener("input", updatePriceDisplay);
  updatePriceDisplay();

  const productContainer = document.getElementById("product-container");
  const paginationContainer = document.getElementById("pagination");
  const sortSelect = document.createElement("select");
  sortSelect.id = "sortSelect";
  sortSelect.className = "form-select w-auto mb-4 ms-auto mt-5";

  sortOptions.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt;
    option.textContent = opt;
    sortSelect.appendChild(option);
  });

  document.querySelector(".col-lg-9").prepend(sortSelect);

  sortSelect.addEventListener("change", () => {
    if (sortSelect.value === "Price: Low to High") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortSelect.value === "Price: High to Low") {
      products.sort((a, b) => b.price - a.price);
    }
    renderProducts(currentPage);
  });

  const itemsPerPage = 9;
  let currentPage = 1;

  function renderProducts(page) {
    productContainer.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginated = products.slice(start, end);

    paginated.forEach(product => {
      let stars = "";
      for (let i = 0; i < 5; i++) {
        stars += i < product.rating ? "⭐" : "☆";
      }

      productContainer.innerHTML += `
               <div class="col mt-3">
            
      <div class="card shadow-sm h-100 text-center">
        <img src="${product.image}" class="card-img-top p-3 product-img" style="height: 250px; object-fit: contain;" alt="${product.name}">
        <div class="card-body">
          <h6 class="card-title">${product.name}</h6>
          <p class="mb-1">${stars}</p>
          <p class="text-danger fw-semibold">$${product.price}</p>
        </div>
      </div>
    </a>
  </div>`;
    });
  }

  function renderPagination() {
    paginationContainer.innerHTML = "";
    const pageCount = Math.ceil(products.length / itemsPerPage);

    for (let i = 1; i <= pageCount; i++) {
      const active = i === currentPage ? "active bg-dark text-white" : "bg-light";
      paginationContainer.innerHTML += `
            <li class="page-item">
              <button class="page-link border-0 ${active}" style="width: 40px; height: 40px;" onclick="changePage(${i})">${i}</button>
            </li>`;
    }

    if (currentPage < pageCount) {
      paginationContainer.innerHTML += `
            <li class="page-item">
              <button class="page-link border-0 bg-light" style="width: 40px; height: 40px;" onclick="changePage(${currentPage + 1})">&rsaquo;</button>
            </li>`;
    }
  }

  window.changePage = function (page) {
    currentPage = page;
    renderProducts(currentPage);
    renderPagination();
    customModal();

  };

  renderProducts(currentPage);
  renderPagination();
  customModal();


  // Event: highlight selected color
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("color-circle")) {
      document.querySelectorAll(".color-circle").forEach(el => el.classList.remove("selected"));
      e.target.classList.add("selected");
    }
  });
};