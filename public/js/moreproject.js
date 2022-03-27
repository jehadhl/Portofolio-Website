new WOW().init();

const hamburger_menu = document.querySelector(".humburger-menu");
const navbar = document.querySelector("nav");
const links = document.querySelectorAll(".nav-item a");


function closeMenu() {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
  }


  hamburger_menu.addEventListener("click", () => {
    if (!navbar.classList.contains("open")) {
      navbar.classList.add("open");
      document.body.classList.add("stop-scrolling");
    } else {
      closeMenu();
    }
  });

  links.forEach((link) => link.addEventListener("click", () => closeMenu()));