const prompt = require('prompt-sync')()

let numero =  Number(prompt('digite um numero'))
if(numero > 0){
    console.log(`o ${numero} é positivo`)
}
else{
    console.log(`o ${numero} é negativo`)
}