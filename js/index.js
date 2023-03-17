const header = document.querySelector("header");
let 이전좌표 = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY < 100) {
    header.classList.remove("scrolled");
  } else {
    header.classList.add("scrolled");
  }
});

const hambergerButton = document.getElementById("hamberger");
const hambergerModal = document.querySelector(".hamberger-modal");
hambergerButton.addEventListener("click", (e) => {
  e.preventDefault();

  hambergerButton.classList.toggle("active");
  hambergerModal.classList.toggle("hide");
  hambergerModal.classList.toggle("go-back");
});
