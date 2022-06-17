var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var bnb = document.getElementById("binancecoin");
var ltc = document.getElementById("litecoin");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Clitecoin&vs_currencies=usd",
    "method" : "get",
    "headers":{}
}

$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    bnb.innerHTML = response.binancecoin.usd;
    ltc.innerHTML = response.litecoin.usd;
});





    var consumo = Number(document.getElementById('consumo').value);

    var kwh = Number(document.getElementById('kwh').value);

    var resultado = (consumo * 0.001)*kwh*(24*31);

    document.getElementById('resultado').value = resultado;
