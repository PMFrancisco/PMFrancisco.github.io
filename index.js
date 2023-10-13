// Change light/dark css stylesheets
var style = document.getElementById("page-style");
function switchTheme() {
  if (style.href.includes("dark.css")) {
    style.href = "light.css";
  } else {
    style.href = "dark.css";
  }
}

//Konami Code sequence
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

// Saves current index position
let currentIndex = 0;

// Detect key presses
document.addEventListener("keydown", (event) => {
  // Check if the pressed key matches the current position in the code sequence
  if (event.code === konamiCode[currentIndex]) {
    currentIndex++;
    if (currentIndex === konamiCode.length) {
      // Entire Konami Code sequence was entered
      console.log("Cheat code detected!");
      // Changes the theme
      style.href = "stylegeek.css";
      // Scrolls to top
      window.scrollTo(0, 0);
      // Removes the switch
      const removeSwitch = document.getElementById("themeSwitch");
      removeSwitch.remove();

      // Changes h1
      const characterSheet = document.querySelector("header h1");
      characterSheet.textContent = "Hoja de Personaje";

      // Changes nav ul
      const newNav = ["Personaje", "Aventuras", "Competencias", "Portales"];
      const navList = document.querySelectorAll("header ul a");
      for (let i = 0; i < newNav.length; i++) {
        navList[i].textContent = newNav[i];
      }

      // Changes h2
      const newHeaders = document.getElementsByTagName("h2");
      for (let i = 0; i < newNav.length; i++) {
        newHeaders[i].textContent = newNav[i];
      }

      // Changes inicio p
      const character = document.getElementById("inicio");
      const pCharacter = character.querySelector("p");
      pCharacter.innerHTML =
        "<b>Nombre:</b> Fran <br><b>Edad:</b> 33 <br><b>Clase:</b> Estudiante <br><b> Campaña:</b> The Bridge";

      // Changes projects
      const newAdventures = [
        {
          src: "img/Essence-Front-Cover.jpg",
          alt: "Portada del juego Exalted Essence",
          title: "Exalted: Essence",
          description:
            "La temática se enfoca en la creación de historias de fantasía, aventuras y exploración en un mundo de ambientación medieval y mágica",
        },
        {
          src: "img/PHB_Mobile.jpeg",
          alt: "Portada del juego Dungeons&Dragons",
          title: "Dungeons & Dragons",
          description:
            "Juego de rol que combina elementos de fantasía épica, mitología y artes marciales.",
        },
        {
          src: "img/ScionOriginsCover.jpg",
          alt: "Portada del juego Scion",
          title: "Scion",
          description:
            "Los jugadores asumen roles de estos semidioses y exploran un mundo lleno de mitología, donde deben equilibrar sus deberes divinos con su vida mortal.",
        },
      ];

      var projectElements = document.querySelectorAll(".project");
      for (let i = 0; i < newAdventures.length; i++) {
        projectElements[i].querySelector("img").src = newAdventures[i].src;
        projectElements[i].querySelector("img").alt = newAdventures[i].alt;
        projectElements[i].querySelector("h3").textContent =
          newAdventures[i].title;
        projectElements[i].querySelector("p").textContent =
          newAdventures[i].description;
      }

      // Changes contact
      const newContact = document
        .getElementById("contact")
        .getElementsByTagName("p");
      newContact[0].textContent =
        "Puedes enviar tus mensajes a través del cuervo de Invernalia:";

      // Reset the index when you enter the cheat code
      currentIndex = 0;
    }
  } else {
    // Reset the index if you put it wrong
    currentIndex = 0;
  }
});
