"use strict";

// Url de l'api
var url = 'https://api.chucknorris.io/jokes/random';
var banner = document.getElementById('banner'); // LE GETELMENTBYID RENVOIE A LA BANNER //

function getJoke() {
  fetch(url) // FETCH PERMET LA COMPILATION DE RESSOURCES PROVENANT DU CONST URL (L1) //
  .then(function (res) {
    return res.json();
  }) // JSON PERMET LA RECUPERATION DE RESSOURCES //
  .then(function (data) {
    var joke = data.value; // LA VALEUR AFFRICHEE CI-DESSUS SERA LA CONSTANTE DU JOKE //

    var html = "\n                    <h5>".concat(joke, "</h5>\n                 "); // PERMET D'AFFICHER UNE BLAGUE APRES LA RECUPERATION CI-DESSUS //

    banner.innerHTML = html; // ??? ///
  });
}

getJoke(); // AFFICHE LA BLAGUE SUR LE SITE // 
// setInterval(function () {
//     getJoke()
// }, 8000)