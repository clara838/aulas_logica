const prompt = require ('prompt-sync')()

let nr1 = Number(prompt('Digite um numero'));
let nr2 = Number(prompt('digite outro numero'))
let divisao = nr1 / nr2
console.log(`a divisao entre ${nr1} / ${nr2} é igual: ${divisao}`);

