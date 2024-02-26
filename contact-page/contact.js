document.addEventListener("DOMContentLoaded", function () {
  const navbarnav = document.querySelector(".navbar-nav");
  const menu = document.getElementById("menu");
  menu.onclick = () => {
    navbarnav.classList.toggle("active");
  };
});

document.addEventListener("click", function (e) {
  const navbarnav = document.querySelector(".navbar-nav");
  const menu = document.getElementById("menu");
  if (!menu.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
