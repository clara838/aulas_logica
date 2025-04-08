const prompt = require('prompt-sync')()

//ler altura e largura
let altura = Number(prompt('Digite a altura'))
let altura = Number(prompt('Digite a largura'))
//calcular a area
let area = largura * altura

// calcular quantidade de tinta necessaria 1 litro cobre 2m²
letTintaNecessaria = area / 2;
console.log(`Area ${area}`);
console.log(`Tinta necessaria ${TintaNecessaria.toFixed(2)} litros de tinta`)