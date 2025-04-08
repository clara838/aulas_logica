const prompt = require ('prompt-sync')()

let nr1 = Number(prompt('digite um numero'));
let nr2 = Number(prompt('digite um numero'));
let soma_notas = nr1 + nr2;
let media = soma_notas / 2;
console.log (`a soma das notas é ${soma_notas} e a media é ${media}`);
