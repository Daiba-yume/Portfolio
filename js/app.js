/* Nav */

var navLinks = document.querySelectorAll("nav a");
var isScrolling = false;

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.forEach((link) => link.classList.remove("nav-active"));
    this.classList.add("nav-active");

    isScrolling = true;
    var target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  });
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
