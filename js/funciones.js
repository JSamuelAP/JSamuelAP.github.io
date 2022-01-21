function iniciarApp() {
  // Materialize CSS
  M.AutoInit();

  configurarAnimaciones();
  imprimirProyectosUI();
}

function configurarAnimaciones() {
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
}

function imprimirProyectosUI() {
  const proyectsSection = document.querySelector("#proyects .row");
  const proyectsFragment = document.createDocumentFragment();

  proyectos.forEach((proyecto) => {
    const cardTemplate = document.querySelector("#card");
    const cloneCard = cardTemplate.content.cloneNode(true);
    const { name, imgURL, tags, liveURL, codeURL, description } = proyecto;

    // Imagen
    cloneCard.querySelector("img").setAttribute("src", imgURL);

    // Titulo
    cloneCard.querySelector(
      ".card-content .card-title"
    ).innerHTML = `${name} <i class="material-icons right">more_vert</i>`;

    // Chips
    tags.forEach((tag) => {
      cloneCard.querySelector(
        ".card__chips"
      ).innerHTML += `<span class="chip">${tag}</span>`;
    });

    // Botones
    cloneCard.querySelector(".card__btn--live").setAttribute("href", liveURL);
    cloneCard.querySelector(".card__btn--code").setAttribute("href", codeURL);

    // Titulo de la descripcion
    cloneCard.querySelector(
      ".card-reveal .card-title"
    ).innerHTML = `${name}  <i class="material-icons right">close</i>`;

    // Descripcion
    cloneCard.querySelector(".card-description").textContent = description;

    proyectsFragment.appendChild(cloneCard);
  });

  proyectsSection.appendChild(proyectsFragment);
}
