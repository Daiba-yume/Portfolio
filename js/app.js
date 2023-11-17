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
  // Sélectionnez la barre de navigation
  const nav = document.getElementById("nav");

  // Fonction pour mettre à jour la classe de la barre de navigation
  function updateNav() {
    if (window.scrollY > 0) {
      nav.classList.add("fixed-nav");
    } else {
      nav.classList.remove("fixed-nav");
    }
  }

  // Ajoutez un écouteur pour le défilement
  window.addEventListener("scroll", updateNav);

  // Ajoutez des écouteurs pour les liens de navigation
  const navLinks = document.querySelectorAll("#nav a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Ajoutez une logique pour faire défiler jusqu'à la section appropriée
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
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
  window.scrollTo({ top: 0, behavior: "smooth" });
}
