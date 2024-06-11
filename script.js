import Logo from "./components/logo.js";

// permet d'ajouter le logo
let appLogo = Logo();

let googleConnection = document.querySelector(".but.but1");
let appleConnection = document.querySelector(".but.but2");

// permet d'ajouter le Logo dans la page.
let title = document.querySelector(".title");
title.appendChild(appLogo);

// gestionnaire d'evenement lorsqu'on clique sur un des boutons de connexion.
// ---------------------------------------------------------
googleConnection.addEventListener("click", () => {
  console.log("lol");
  window.location.assign("./data-verification/checking.html");
});

appleConnection.addEventListener("click", () => {
  console.log("actually nonfuctionnal");
});
