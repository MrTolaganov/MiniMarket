window.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product"),
    buttons = document.querySelectorAll("button"),
    openBtn = document.querySelector(".open");

  function createCard() {
    const cart = document.createElement("div"),
      field = document.createElement("div"),
      heading = document.createElement("h2"),
      closeBtn = document.createElement("button");

    cart.classList.add("cart");
    field.classList.add("cart-field");
    closeBtn.classList.add("close");

    heading.textContent = "My products";
    closeBtn.textContent = "Close";

    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(closeBtn);
  }

  createCard();

  const cart = document.querySelector(".cart"),
    closeBtn = document.querySelector(".close"),
    field = document.querySelector(".cart-field");

  openBtn.addEventListener("click", () => {
    cart.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    cart.style.display = "none";
  });

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const cloneItem = products[index].cloneNode(true),
        btn = cloneItem.querySelector("button");

      btn.remove();
      field.appendChild(cloneItem);
      products[index].remove();
    });
  });
});
