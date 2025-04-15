const prompt = require('prompt-sync')()

//operacoes com variaveias 
let nr1 = Number (("digite um numero?"));
let nr2 = Number (("digite um numero?"));
let soma = nr1 + nr2;
console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`);

let subtracao = nr1 - nr2;
console.log(`a subtracao entre ${nr1} - ${nr2} é igual: ${subtracao}`)
console.log(`a subtracao entre ${nr1} - ${nr2} é igual: ${nr1 - nr2}`)

let multriplicacao = nr1 * nr2;
console.log(`a multplicacao entre ${nr1} X ${nr2} é igual: ${multiplicacao}`);

let divisao = nr1 / nr2;
console.log(`a divisao entre ${nr1} / ${nr2} é igual: ${divisao}`);

let exponenciacao = nr1 ** nr2;
console.log(`a exponenciacao entre ${nr1} ** ${nr2} é igual: ${exponenciacao}`);

// calculando valor do celular com desconto
let valor = Number(prompt('Digite o preco do celular: '));
let desconto = Number(prompt('Digite o preco do desconto '));
valor = valor - desconto;
console.log(`o valor do celular com desconto é R$${valor}`)

//calculando o dobro e a metade 
//passo 1
let numero = Number(prompt('Digite um numero:'))
//passo 2
let dobro = numero * 2;
//passo 3
let metade = numero / 2;
//passo 4
console.log(`O dobro de ${numero} é ${dobro} e a metade é ${metade}`)

let horas  = 8  
let dias = 15
let valorCobrado = R$100/horas
console.log(`a hora de trabalho é ${horas} * pelos ${dias} e o valor cobrado é ${valorCobrado}`)
