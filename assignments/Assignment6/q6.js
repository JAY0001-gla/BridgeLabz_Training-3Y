const API_URL = "https://fakestoreapi.com/products";
const ERROR_TEXT = "Failed to load products. Please try again.";

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.title;

  const title = document.createElement("h3");
  title.textContent = product.title;

  const price = document.createElement("p");
  price.textContent = `$${product.price}`;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(price);
  return card;
}

async function loadProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const products = await response.json();

    products.forEach((product) => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log("");
    });

    if (typeof document !== "undefined") {
      const container = document.getElementById("productContainer");
      products.forEach((product) => container.appendChild(createProductCard(product)));
    }
  } catch (error) {
    console.log(ERROR_TEXT);
    if (typeof document !== "undefined") {
      document.getElementById("errorMessage").textContent = ERROR_TEXT;
    }
  }
}

loadProducts();
