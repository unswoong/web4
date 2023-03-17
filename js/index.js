const header = document.querySelector("header");
let 이전좌표 = window.scrollY;

window.addEventListener("scroll", () => {
  hambergerButton.classList.add("active");
  hambergerModal.classList.add("hide-modal");
  hambergerModal.classList.add("go-back");

  if (window.scrollY < 100) {
    header.classList.remove("scrolled");
  } else {
    header.classList.add("scrolled");
  }
  if (이전좌표 < window.scrollY) {
    header.classList.add("hide-header");
  } else {
    header.classList.remove("hide-header");
  }
  이전좌표 = window.scrollY;
});

const hambergerButton = document.getElementById("hamberger");
const hambergerModal = document.querySelector(".hamberger-modal");

hambergerButton.addEventListener("click", (e) => {
  e.preventDefault();
  hambergerButton.classList.toggle("active");
  hambergerModal.classList.toggle("hide-modal");
  hambergerModal.classList.toggle("go-back");
});
