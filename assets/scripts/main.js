let scrollBtn = document.getElementById("scroll-button");
let menu = document.querySelector(".menu");
let overlay = document.querySelector(".overlay");

window.addEventListener("scroll", (e) => {
  window.scrollY > 500
    ? (scrollBtn.style.display = "block")
    : (scrollBtn.style.display = "none");
});

menu.addEventListener("click", (e) => {
  overlay.classList.toggle("close");
});

overlay.addEventListener("click", (e) => {
  overlay.classList.remove("close");
});
