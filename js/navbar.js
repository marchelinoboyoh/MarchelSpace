const hamburger = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".link-nav");
const links = document.querySelectorAll(".link-nav li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
