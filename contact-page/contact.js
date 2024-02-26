document.addEventListener("DOMContentLoaded", function () {
  const navbarnav = document.querySelector(".navbar-nav");
  const menu = document.getElementById("menu");

  menu.onclick = () => {
    navbarnav.classList.toggle("active");
  };
});
