document.addEventListener("DOMContentLoaded", function () {
  // Materialize CSS
  M.AutoInit();

  // ScrollReveal
  window.sr = ScrollReveal();

  sr.reveal(".header__content", {
    delay: 2000,
    duration: 1500,
    origin: "bottom",
    distance: "-500px",
  });
  sr.reveal(".about__img", {
    duration: 2000,
    origin: "left",
    distance: "-100px",
  });
  sr.reveal(".card-panel", {
    duration: 1000,
    origin: "top",
    distance: "-100px",
  });
  sr.reveal(".card", {
    duration: 1500,
    origin: "top",
    distance: "-150px",
  });

  // Hero animation
  document.querySelector("#header").classList.add("animate");
});
