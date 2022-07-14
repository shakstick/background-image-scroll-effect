const bg = document.getElementById("bg");

window.addEventListener("scroll", () => {
  bg.style.opacity = 1 - window.scrollY / 1200;
  bg.style.backgroundSize = 140 - window.scrollY / 30 + "%";
});
