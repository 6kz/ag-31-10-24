const navEl = document.querySelector(".headerNav");
const hamburguerEl = document.querySelector(".hamburguer");

if (navEl && hamburguerEl) {
  hamburguerEl.addEventListener("click", () => {
    navEl.classList.toggle("headerNav--open");
    hamburguerEl.classList.toggle("hamburguer--open");
  });

  navEl.addEventListener("click", () => {
    navEl.classList.remove("headerNav--open");
    hamburguerEl.classList.remove("hamburguer--open");
  });
} else {
  console.error("Elements not found: .headerNav or .hamburguer");
}
