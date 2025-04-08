const prompt = require('prompt-sync')()

let nr1 = Number(prompt('Digite um numero'));
let centimetros = nr1 * 100;
let milimetros = nr1 * 10;
let km = nr1 / 1000;
console.log(`o resultado da conversao de centimetros é ${centimetros} para milimetros é ${milimetros}e km é ${km}`);
