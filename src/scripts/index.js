

import "../styles/index.scss";

// Example JS for Add to Cart / Wishlist buttons
document.querySelectorAll(".btn-primary").forEach(btn => {
  btn.addEventListener("click", () => alert("Added to cart!"));
});
document.querySelectorAll(".btn-ghost").forEach(btn => {
  btn.addEventListener("click", () => alert("Added to wishlist!"));
});
