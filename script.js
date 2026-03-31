const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQD2xxN7hnDc6uDKh1abYurB8sSw2Kb5CAuf-GG9AS-gXQQhciUsdParypSQ04lz3blPlh5f31HKG8g/pub?output=csv";

const categoryButtons = document.querySelectorAll(".category-btn");
const searchInput = document.getElementById("searchInput");
const productGrid = document.getElementById("productGrid");

let activeCategory = "all";
let products = [];

function parseCSVLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

function csvToProducts(csvText) {
  const lines = csvText
    .replace(/\r/g, "")
    .split("\n")
    .filter((line) => line.trim() !== "");

  if (lines.length < 2) {
    return [];
  }

  const headers = parseCSVLine(lines[0]).map((header) => header.trim());

  return lines.slice(1).map((line) => {
    const values = parseCSVLine(line);
    const item = {};

    headers.forEach((header, index) => {
      item[header] = values[index] ? values[index].trim() : "";
    });

    return {
      name: item.name || "",
      category: item.category || "",
      categoryLabel: item.categoryLabel || "",
      price: item.price || "",
      badge: item.badge || "",
      description: item.description || "",
      image: item.image || "",
      available: String(item.available).toUpperCase() === "TRUE"
    };
  });
}

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
      <div class="card ${product.category}">
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
    const response = await fetch(SHEET_CSV_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Google Sheets verisi alınamadı.");
    }

    const csvText = await response.text();
    products = csvToProducts(csvText);
    renderProducts();
  } catch (error) {
    console.error("Menü verisi yüklenemedi:", error);
    productGrid.innerHTML = `
      <div class="card">
        <div class="card-content">
          <span class="badge">Hata</span>
          <h3>Menü yüklenemedi</h3>
          <p>Lütfen daha sonra tekrar deneyin.</p>
        </div>
      </div>
    `;
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
