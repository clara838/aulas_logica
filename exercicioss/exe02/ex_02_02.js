const prompt = require('prompt-sync')()

// peça dois numeros

let num1 = Number(prompt('digite um numero'))
let num2 = Number(prompt('digite outro numero'))

//mostre qual é o maior e qual o menor 
if(num1 > num2){ 
    console.log(`${num1} é maior que ${num2}`)
}else{
    console.log(`${num1} é menor que ${num2}`)
}