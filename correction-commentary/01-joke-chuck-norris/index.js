// Url de l'api
const url = 'https://api.chucknorris.io/jokes/random'

const banner = document.getElementById('banner')
    // LE GETELMENTBYID RENVOIE A LA BANNER //
function getJoke() {
    fetch(url)
        // FETCH PERMET LA COMPILATION DE RESSOURCES PROVENANT DU CONST URL (L1) //
        .then(res => res.json())
        // JSON PERMET LA RECUPERATION DE RESSOURCES //
        .then(data => {
            const joke = data.value
                // LA VALEUR AFFRICHEE CI-DESSUS SERA LA CONSTANTE DU JOKE //
            let html = `
                    <h5>${joke}</h5>
                 `
                // PERMET D'AFFICHER UNE BLAGUE APRES LA RECUPERATION CI-DESSUS //
            banner.innerHTML = html

            // ??? ///
        })
        .catch(err => console.log(err))
}

getJoke()
    // AFFICHE LA BLAGUE SUR LE SITE // 
    // setInterval(function () {
    //     getJoke()
    // }, 8000)