const hamburger = document.querySelector(".hamburger");
const navbarTwo = document.querySelector(".navbar__two");

let showMenu = false;

hamburger.addEventListener("click", () => {
  if (!showMenu) {
    navbarTwo.classList.add("open");
    showMenu = true;
  } else {
    navbarTwo.classList.remove("open");
    showMenu = false;
  }
});
