const hamburger = document.querySelector("#hamburger");
const navbar = document.getElementById("nav-menu");

// //navbar ketika di scroll
window.onscroll = function () {
  const header = document.getElementById("header");
  const fixed = header.offsetTop;

  if (window.pageYOffset > fixed) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navbar.classList.toggle("animasi-navbar");
  navbar.classList.toggle("hidden");
});

// footer
const nama = document.getElementById("nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
