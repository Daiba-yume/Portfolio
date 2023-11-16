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
  const mobileMenuOpenButton = document.getElementById("mobile-menu-open");
  const mobileMenuCloseButton = document.getElementById("mobile-menu-close");
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
      body.classList.remove("no-scroll");
    });
  }
});

/*Contact */

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  const nom = form.querySelector('[name="nom"]').value;
  const prenom = form.querySelector('[name="prenom"]').value;
  const email = form.querySelector('[name="email"]').value;
  const sujet = form.querySelector('[name="sujet"]').value;
  const message = form.querySelector('[name="message"]').value;

  if (!nom || !prenom || !email || !sujet || !message) {
    e.preventDefault();
    alert("Veuillez remplir tous les champs du formulaire.");
  }
});
