let scrollBtn = document.getElementById("scroll-button");

window.addEventListener("scroll", (e) => {
  window.scrollY > 500
    ? (scrollBtn.style.display = "block")
    : (scrollBtn.style.display = "none");
});
