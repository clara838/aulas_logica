const prompt = require ('prompt-sync')()
let nr1 = Number(prompt('Digite um numero'))
let dobro = nr1 * 2 
let triplo = nr1 * 3
let elevado = nr1 ** 3
console.log(`o dobro de é ${dobro}, o triplo é ${triplo} e o valor elevado é ${elevado}`)