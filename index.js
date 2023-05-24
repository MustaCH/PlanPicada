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

//CARRUSEL PICADAS

var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  init: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    620: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
