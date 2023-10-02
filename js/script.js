//Membuat variable
const navMenu = document.querySelector(".navMenu");
const navHam = document.querySelector("#navHam");

//Memunculkan sidebar saat #navHam (icon hamburger menu) diklik
document.querySelector("#navHam").onclick = () => {
  navMenu.classList.toggle("active1");
};

//Menutup sidebar saat klik diluar sidebar
document.addEventListener("click", function (e) {
  if (!navHam.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active1");
  }
});
