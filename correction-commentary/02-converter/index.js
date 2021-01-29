const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

const priceDiv = document.getElementById('prices')

function getCurrency() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const currency = data
      console.log('DATA: ', data)
      getPrice(currency)
      getConverter(currency)
    })
    .catch(err => console.log(err))
}

getCurrency()

setInterval(function () {
  getCurrency()
}, 10000);

function getPrice(cricri) {
  let USD = cricri.bpi.USD.rate
  let EUR = cricri.bpi.EUR.rate
  let GBP = cricri.bpi.GBP.rate

  const price = `
    <h4 id="priceUSD"> ${USD} USD ($)</h4>
    <h4 id="priceEUR"> ${EUR} EUR (€)</h4>
    <h4 id="priceGBP"> ${GBP} GBP (£)</h4>
  `
  priceDiv.innerHTML = price

}

function getConverter(currency) {

  const btc = document.getElementById('btc');
  const usd = document.getElementById('usd');
  const eur = document.getElementById('eur');
  const gbp = document.getElementById('gbp');

  btc.addEventListener("input", function () {
    getResult(this.id, this.value, currency);
  });
  usd.addEventListener("input", function () {
    getResult(this.id, this.value, currency);
  });
  eur.addEventListener("input", function () {
    getResult(this.id, this.value, currency);
  });
  gbp.addEventListener("input", function () {
    getResult(this.id, this.value, currency);
  });

  function getResult(id, valeur, currency) {
    const ratioUsdEur = currency.bpi.USD.rate_float / currency.bpi.EUR.rate_float,
      ratioUsdGbp = currency.bpi.USD.rate_float / currency.bpi.GBP.rate_float

    switch (id) {
      case 'btc':
          usd.value = valeur * currency.bpi.USD.rate_float;
          eur.value = valeur * currency.bpi.EUR.rate_float;
          gbp.value = valeur * currency.bpi.GBP.rate_float;
        break;
      case 'usd':
          btc.value = valeur / currency.bpi.USD.rate_float;
          eur.value = valeur / ratioUsdEur;
          gbp.value = valeur / ratioUsdGbp;
        break;
      case 'eur':
          btc.value = valeur / currency.bpi.EUR.rate_float;
          usd.value = valeur * ratioUsdEur;
          gbp.value = valeur / ratioUsdGbp;
        break;
      case 'gbp':
          btc.value = valeur / currency.bpi.EUR.rate_float;
          usd.value = valeur * ratioUsdEur;
          eur.value = valeur / ratioUsdEur;
        break;
      default:
    }

  }
}

// const test = document.getElementById('test');

// priceDiv.addEventListener("click", function() {
//   test.textContent = "Hello World";
// });