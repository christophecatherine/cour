// const pour recuperer le lien json
const requestURL = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    // const pour relier notre requete vers une nouvelle "XMLHttpRequest()"
const request = new XMLHttpRequest();
// demande d'ouverture du "GET" et de la requete "URL"
request.open('GET', requestURL);
// demande de reponse vers notre "json"
request.responseType = 'json';
// requete de charger une fonction
request.onload = () => {
        // variable de la devis correspont a la reponse 
        var currency = request.response;
        // execute la devise 
        getPrice(currency)
            // execute le convertisseur
        getConverter(currency)
            // log le resultat 
        console.log(currency)
    }
    // envoyer la requete 
request.send();
// const de l'id pour recuperer "prices"
const priceDiv = document.getElementById('prices')
    // fonction de convertir la devise 
function getPrice(currency) {
    let USD = currency.bpi.USD.rate
    let EUR = currency.bpi.EUR.rate
    let GBP = currency.bpi.GBP.rate
        // const pour convertir les devises 
    const price = `
    <h4 id="priceUSD">` + USD + ` USD ($)</h4>
    <h4 id="priceEUR">` + EUR + ` EUR (€)</h4>
    <h4 id="priceGBP">` + GBP + ` GBP (£)</h4>
  `
        // resultat de l'objet 
    priceDiv.innerHTML = price

}

// fonction de convertir les devises 
function getConverter(currency) {
    //recupere les "id" des devises 
    const btc = document.getElementById('btc');
    const usd = document.getElementById('usd');
    const eur = document.getElementById('eur');
    const gbp = document.getElementById('gbp');
    // recupere la fonction input pour lui dire de recuperer nos valeurs 
    btc.addEventListener("input", function() {
        getResult(this.id, this.value, currency);
    });
    usd.addEventListener("input", function() {
        getResult(this.id, this.value, currency);
    });
    eur.addEventListener("input", function() {
        getResult(this.id, this.value, currency);
    });
    gbp.addEventListener("input", function() {
        getResult(this.id, this.value, currency);
    });
    // fonction du resultat de nos "id" "des valeurs" "des devises"
    function getResult(id, valeur, currency)
    // on defenir les ratios pour les diferentes devise
    {
        const ratioUsdEur = currency.bpi.USD.rate_float / currency.bpi.EUR.rate_float,
            ratioUsdGbp = currency.bpi.USD.rate_float / currency.bpi.GBP.rate_float
            // on creer une condition
        if (id == "btc") {
            usd.value = valeur * currency.bpi.USD.rate_float;
            eur.value = valeur * currency.bpi.EUR.rate_float;
            gbp.value = valeur * currency.bpi.GBP.rate_float;

        } else if (id == "usd") {
            btc.value = valeur / currency.bpi.USD.rate_float;
            eur.value = valeur / ratioUsdEur;
            gbp.value = valeur / ratioUsdGbp;

        } else if (id == "eur") {
            btc.value = valeur / currency.bpi.EUR.rate_float;
            usd.value = valeur * ratioUsdEur;
            gbp.value = valeur / ratioUsdGbp;

        } else if (id == "gbp") {
            btc.value = valeur / currency.bpi.EUR.rate_float;
            usd.value = valeur * ratioUsdEur;
            eur.value = valeur / ratioUsdEur;

        }

    }

}