/* Nav */

var navLinks = document.querySelectorAll("nav a");
var isScrolling = false;

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");

    isScrolling = true;
    var target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuOpenButton = document.getElementById("mobileMenuOpen");
  const mobileMenuCloseButton = document.getElementById("mobileMenuClose");
  const nav = document.querySelector("nav");
  const body = document.body;

  mobileMenuOpenButton.addEventListener("click", function () {
    nav.classList.add("active");
    mobileMenuOpenButton.style.display = "none";
    mobileMenuCloseButton.style.display = "block";
    body.classList.add("no-scroll");
  });

  mobileMenuCloseButton.addEventListener("click", function () {
    nav.classList.remove("active");
    mobileMenuOpenButton.style.display = "block";
    mobileMenuCloseButton.style.display = "none";
    body.classList.remove("no-scroll");
  });

  // Fermer le menu lorsqu'un lien est cliqué
  const navLinks = nav.querySelectorAll("a");
  for (const link of navLinks) {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
      mobileMenuOpenButton.style.display = "block";
      mobileMenuCloseButton.style.display = "none";
      body.classList.remove("noScroll");
    });
  }
});

/* Back to top */

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var button = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
