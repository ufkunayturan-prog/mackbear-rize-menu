const categoryButtons = document.querySelectorAll(".category-btn");
const searchInput = document.getElementById("searchInput");
const productGrid = document.getElementById("productGrid");

let activeCategory = "all";
let products = [];

function renderProducts() {
  const searchText = searchInput.value.toLowerCase().trim();

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      activeCategory === "all" || activeCategory === product.category;

    const searchMatch = product.name.toLowerCase().includes(searchText);
    const isAvailable = product.available !== false;

    return categoryMatch && searchMatch && isAvailable;
  });

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div class="card">
        <div class="card-content">
          <span class="badge">Bilgi</span>
          <h3>Bu kategoride ürün yok</h3>
          <p>Ürünler geldiğinde bu alan güncellenecek.</p>
        </div>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="card">
          <img src="${product.image}" alt="${product.name}">
          <div class="card-content">
            <span class="badge">${product.badge || "Ürün"}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="card-bottom">
              <span class="card-category">${product.categoryLabel}</span>
              <strong>${product.price}</strong>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

async function loadProducts() {
  try {
    const response = await fetch("data/products.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Ürün verisi alınamadı.");
    }

    const data = await response.json();
    products = Array.isArray(data.products) ? data.products : [];
    renderProducts();
  } catch (error) {
    productGrid.innerHTML = `
      <div class="card">
        <div class="card-content">
          <span class="badge">Hata</span>
          <h3>Menü yüklenemedi</h3>
          <p>Lütfen daha sonra tekrar deneyin.</p>
        </div>
      </div>
    `;
    console.error(error);
  }
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);

loadProducts();
