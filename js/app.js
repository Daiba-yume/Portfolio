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

window.addEventListener("noScroll", function () {
  if (isScrolling) return;

  let fromTop = window.scrollY + window.innerHeight / 3;

  navLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (link.hash === "#Home") {
      if (window.scrollY < 100) {
        navLinks.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      }
    } else if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLinks.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
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
    body.classList.add("noScroll");
  });

  mobileMenuCloseButton.addEventListener("click", function () {
    nav.classList.remove("active");
    mobileMenuOpenButton.style.display = "block";
    mobileMenuCloseButton.style.display = "none";
    body.classList.remove("noScroll");
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
