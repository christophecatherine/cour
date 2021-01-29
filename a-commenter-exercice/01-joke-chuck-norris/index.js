// Url de l'api
const url = 'https://api.chucknorris.io/jokes/random' // lien de renvoie sur l'adresse 

const banner = document.getElementById('banner') // constante de recuperation de l'element  "banner"

function getJoke() { // creation de la function "getJoke" qui appel notre url
    fetch(url) // cherche notre url 
        .then(res => res.json()) // transforme notre resultat en forma json
        .then(data => { // ??
            const joke = data.value // ?? 
                // variable qui lance "${joke}"
            let html = ` 
                    <h5>${joke}</h5>
                `
            banner.innerHTML = html // permet d'inserrer notre banner en html
        })
}

getJoke() // lancer la fonction 

// setInterval(function () {
//     getJoke()
// }, 8000)