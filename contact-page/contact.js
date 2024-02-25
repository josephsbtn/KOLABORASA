const navbarnav = document.querySelector(".navbar-nav");
const menu = document.querySelector("menu");

menu.onclick = () => {
  navbarnav.classList.toggle("active");
};
