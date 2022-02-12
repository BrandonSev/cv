// Récupere et stocke les elements qui ont l'attribut [data-bas]
const elements = document.querySelectorAll("[data-bas]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // recuperation des différente class pour l'animation
    const animationName = entry.target.getAttribute("data-bas");
    // Si l"élement est visible a l'ecran
    if (entry.isIntersecting) {
      // Si élement a l'attribut data-bas-delay (delay pour l'animation)
      if (entry.target.getAttribute("data-bas-delay")) {
        // on lui applique le delay fourni via l'attribut [data-bas-delay]
        entry.target.style.animationDelay =
          entry.target.getAttribute("data-bas-delay") + "s";
      }
      // On ajoute la classe de l'animation via l'attribut passé [data-bas=""]
      entry.target.classList.add(`${animationName}`);
    } else {
      // Si l'élement n'est plus traqué on supprime la classe de l'animation
      entry.target.classList.remove(`${animationName}`);
    }
  });
});
// Boucle sur les élements qui ont l'attribut [data-bas] et observe via l'API IntersectionObserver
elements.forEach((element) => observer.observe(element));
