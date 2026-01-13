/* menu toggle – তোমার আগের মতোই */
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

if (menuIcon && menu) {
  menuIcon.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

/* ===== PLUS / MINUS (output না বদলে) ===== */

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".cart_item-actions").forEach(item => {

    // + বাটন খুঁজবে (icon থাক বা না থাক)
    const plusBtn =
      item.querySelector(".plus") ||
      item.querySelector(".fa-plus")?.closest("button");

    // - বাটন
    const minusBtn =
      item.querySelector(".minus") ||
      item.querySelector(".fa-minus")?.closest("button");

    // quantity
    const qtyEl = item.querySelector(".cart_item-quantity");

    // যদি কিছু না পায় → ওই item skip করবে (error হবে না)
    if (!plusBtn || !minusBtn || !qtyEl) return;

    plusBtn.addEventListener("click", () => {
      qtyEl.innerText = Number(qtyEl.innerText) + 1;
    });

    minusBtn.addEventListener("click", () => {
      const value = Number(qtyEl.innerText);
      if (value > 1) {
        qtyEl.innerText = value - 1;
      }
    });

  });

});
