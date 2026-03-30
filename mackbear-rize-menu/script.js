const unavailableProducts = [
  // Örnek:
  // "Mocha",
  // "Iced Latte"
];

const products = [
  {
    name: "Americano",
    category: "kahve",
    categoryLabel: "Sıcak Kahve",
    price: "₺180 / ₺200",
    badge: "Kahve",
    description: "Yoğun ve net kahve tadı.",
    image: "images/americano.png"
  },
  {
    name: "Latte",
    category: "kahve",
    categoryLabel: "Sıcak Kahve",
    price: "₺205 / ₺230",
    badge: "Kahve",
    description: "Espresso ve süt dengesi.",
    image: "images/latte.jpeg"
  },
  {
    name: "Mocha",
    category: "kahve",
    categoryLabel: "Sıcak Kahve",
    price: "₺240 / ₺260",
    badge: "Kahve",
    description: "Çikolatalı kahve lezzeti.",
    image: "images/mocha.jpg"
  },
  {
    name: "White Mocha",
    category: "kahve",
    categoryLabel: "Sıcak Kahve",
    price: "₺240 / ₺260",
    badge: "Kahve",
    description: "Beyaz çikolatalı kahve lezzeti.",
    image: "images/white-mocha.jpg"
  },
  {
    name: "Caramel Latte",
    category: "kahve",
    categoryLabel: "Sıcak Kahve",
    price: "₺240 / ₺260",
    badge: "Kahve",
    description: "Karamel aromalı latte.",
    image: "images/caramel-latte.jpg"
  },
  {
    name: "Filter Coffee",
    category: "kahve",
    categoryLabel: "Sıcak Kahve",
    price: "₺160 / ₺180",
    badge: "Kahve",
    description: "Filtre kahve.",
    image: "images/filter.jpg"
  },
  {
    name: "Flat White",
    category: "kahve",
    categoryLabel: "Sıcak Kahve",
    price: "₺215 / ₺250",
    badge: "Kahve",
    description: "Yoğun espresso, ince süt dokusu.",
    image: "images/flat-white.jpg"
  },
  {
    name: "Cappuccino",
    category: "kahve",
    categoryLabel: "Sıcak Kahve",
    price: "₺205 / ₺230",
    badge: "Kahve",
    description: "Bol köpüklü cappuccino.",
    image: "images/cappuccino.jpg"
  },
  {
    name: "Biscoff Latte",
    category: "kahve",
    categoryLabel: "Sıcak Kahve",
    price: "₺260 / ₺285",
    badge: "Özel",
    description: "Biscoff aromalı latte.",
    image: "images/biscoff-Latte.jpg"
  },
  {
    name: "Oreo Latte",
    category: "kahve",
    categoryLabel: "Sıcak Kahve",
    price: "₺260 / ₺285",
    badge: "Özel",
    description: "Oreo aromalı latte.",
    image: "images/oreo-latte.png"
  },
  {
    name: "Coffenut",
    category: "kahve",
    categoryLabel: "Sıcak Kahve",
    price: "₺260 / ₺285",
    badge: "Özel",
    description: "Kahve ve fındık aromalı içecek.",
    image: "images/coffenut.png"
  },
  {
    name: "Turkish Coffee",
    category: "kahve",
    categoryLabel: "Sıcak Kahve",
    price: "₺110",
    badge: "Kahve",
    description: "Türk kahvesi.",
    image: "images/turkish-coffee.jpg"
  },

  {
    name: "Iced Americano",
    category: "soguk",
    categoryLabel: "Soğuk Kahve",
    price: "₺180 / ₺200",
    badge: "Soğuk",
    description: "Soğuk americano.",
    image: "images/Iced-americano.jpg"
  },
  {
    name: "Iced Latte",
    category: "soguk",
    categoryLabel: "Soğuk Kahve",
    price: "₺205 / ₺230",
    badge: "Soğuk",
    description: "Soğuk latte.",
    image: "images/Iced-latte.jpg"
  },
  {
    name: "Iced Mocha",
    category: "soguk",
    categoryLabel: "Soğuk Kahve",
    price: "₺240 / ₺260",
    badge: "Soğuk",
    description: "Soğuk mocha.",
    image: "images/Iced-mocha.jpg"
  },
  {
    name: "Iced White Mocha",
    category: "soguk",
    categoryLabel: "Soğuk Kahve",
    price: "₺240 / ₺260",
    badge: "Soğuk",
    description: "Soğuk white mocha.",
    image: "images/Iced-white-mocha.png"
  },
  {
    name: "Iced Caramel Latte",
    category: "soguk",
    categoryLabel: "Soğuk Kahve",
    price: "₺240 / ₺260",
    badge: "Soğuk",
    description: "Soğuk caramel latte.",
    image: "images/Iced-caramel-latte.jpg"
  },
  {
    name: "Iced Filter Coffee",
    category: "soguk",
    categoryLabel: "Soğuk Kahve",
    price: "₺160 / ₺180",
    badge: "Soğuk",
    description: "Soğuk filtre kahve.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Iced Biscoff Latte",
    category: "soguk",
    categoryLabel: "Soğuk Kahve",
    price: "₺260 / ₺285",
    badge: "Özel",
    description: "Soğuk biscoff latte.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Iced Oreo Latte",
    category: "soguk",
    categoryLabel: "Soğuk Kahve",
    price: "₺260 / ₺285",
    badge: "Özel",
    description: "Soğuk oreo latte.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Hot Chocolate",
    category: "sicak",
    categoryLabel: "Çay & Sıcak",
    price: "₺230 / ₺260",
    badge: "Sıcak",
    description: "Sıcak çikolata.",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Hot White Chocolate",
    category: "sicak",
    categoryLabel: "Çay & Sıcak",
    price: "₺230 / ₺260",
    badge: "Sıcak",
    description: "Beyaz sıcak çikolata.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Salep",
    category: "sicak",
    categoryLabel: "Çay & Sıcak",
    price: "₺200 / ₺220",
    badge: "Sıcak",
    description: "Geleneksel salep.",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Black Tea",
    category: "sicak",
    categoryLabel: "Çay & Sıcak",
    price: "₺100",
    badge: "Çay",
    description: "Siyah çay.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Apple Cinnamon",
    category: "sicak",
    categoryLabel: "Çay & Sıcak",
    price: "₺100",
    badge: "Çay",
    description: "Elma tarçın çayı.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Stay Happy",
    category: "sicak",
    categoryLabel: "Çay & Sıcak",
    price: "₺100",
    badge: "Çay",
    description: "Bitki çayı.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Winter Tea",
    category: "sicak",
    categoryLabel: "Çay & Sıcak",
    price: "₺155",
    badge: "Çay",
    description: "Kış çayı.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Very Berry",
    category: "sicak",
    categoryLabel: "Çay & Sıcak",
    price: "₺155",
    badge: "Çay",
    description: "Berry aromalı çay.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Jasmine Green Tea",
    category: "sicak",
    categoryLabel: "Çay & Sıcak",
    price: "₺155",
    badge: "Çay",
    description: "Yaseminli yeşil çay.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80"
  }
];

const categoryButtons = document.querySelectorAll(".category-btn");
const searchInput = document.getElementById("searchInput");
const productGrid = document.getElementById("productGrid");

let activeCategory = "all";

function renderProducts() {
  const searchText = searchInput.value.toLowerCase().trim();

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      activeCategory === "all" || activeCategory === product.category;

    const searchMatch = product.name.toLowerCase().includes(searchText);

    const isAvailable = !unavailableProducts.includes(product.name);

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
            <span class="badge">${product.badge}</span>
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

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);

renderProducts();