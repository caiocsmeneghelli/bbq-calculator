// Carne - 400 gr por pessoa + 6 horas - 650
// Cerveja - 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa - 6 horas 1500ml

// crianca valem por 0,5


var inputCriancas = document.getElementById('criancas');
var inputAdultos = document.getElementById('adultos');
var inputDuracao = document.getElementById('duracao');
var result = document.getElementById('results');

function Calculate() {
    var totalBeer = inputAdultos.value * beerPerPerson(inputDuracao.value);
    var totalMeat = inputAdultos.value * meatPerPerson(inputDuracao.value) + (inputCriancas.value * meatPerPerson(inputDuracao.value) / 2);
    var totalDrinks = inputAdultos.value * drinkPerPerson(inputDuracao.value) + (inputCriancas.value * drinkPerPerson(inputDuracao.value) / 2);

    var text = '<p>Total meat: ' + totalMeat / 1000 + ' Kg</p>' +
        '<p>Total beer: ' + totalBeer / 1000 + ' L</p>' +
        '<p>Total drinks: ' + totalDrinks / 1000 + ' L</p>';
    result.innerHTML = text;
}
function beerPerPerson(duracao) {
    var beer = 1200;
    if (duracao >= 6) {
        beer = 2000;
    }
    return beer;
}
function meatPerPerson(duracao) {
    var meat = 400;
    if (duracao >= 6) {
        meat = 650;
    }
    return meat;
}
function drinkPerPerson(duracao) {
    var drink = 1000;
    if (duracao >= 6) {
        drink = 1500;
    }
    return drink;
}