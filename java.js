// BACK TO TOP KNAP MED W3 SCHOOLS
// Knappen hentes
let mybutton = document.getElementById("myBtn");

// Hvorår knap hentes
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Skroller til top v klik
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// BURGER MENU
// Henter bruger
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

// Klik
burger.addEventListener("click", burgerClick);
function burgerClick() {
  // Tilføj/fjern avtive burger = streger
  burger.classList.toggle("active");

  // Tilføj/fjern active nav = menu
  nav.classList.toggle("active");
}

// klik på menuen
menu.addEventListener("click", menuClick);
function menuClick() {
  // Lukker burger-ikon
  burger.classList.remove("active");

  // Skjuler menu
  nav.classList.remove("active");
}

let index = 0;
const totalImages = 9;
const track = document.querySelector(".carousel-track");

function moveSlide(step) {
  index += step;

  // Sørger for, at index ikke går udenfor rækkevidde
  if (index < 0) {
    index = 0;
  } else if (index > totalImages - 3) {
    index = totalImages - 3;
  }

  const trackWidth = document.querySelector(".carousel").clientWidth;
  const imgWidth = trackWidth / 3; // Altid 3 billeder synlige
  const offset = -(index * (imgWidth + 10)); // 10px er mellemrum mellem billeder
  track.style.transform = `translateX(${offset}px)`;
}

// Opdater slides ved skærmstørrelseændring
window.addEventListener("resize", () => {
  moveSlide(0);
});

   window.onload = function () {
     const urlParams = new URLSearchParams(window.location.search);
     if (urlParams.get("success") === "1") {
       alert("Tak for din mail!");
     }
   };

