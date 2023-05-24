//SETEA EL COLOR DEL ELEMENTO SELECCIONADO DE LA NAVBAR

var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    navLinks.forEach(function (link) {
      link.classList.remove("custom-active");
    });

    this.classList.add("custom-active");
  });
});
