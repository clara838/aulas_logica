const prompt = require ('prompt-sync')()

let numero = prompt('digite um numero: ')
switch(numero){
    case '1': 
    console.log(`o dia da semana é domingo`)
    break;
    case '2': 
    console.log(`o dia da semana é segunda`)
    break;
    case '3': 
    console.log(`o dia da semana é terca`)
    break;
    case '4': 
    console.log(`o dia da semana é quarta`)
    break;
    case '5': 
    console.log(`o dia da semana é quinta`)
    break;
    case '6': 
    console.log(`o dia da semana é sexta`)
    break;
    case '7': 
    console.log(`o dia da semana é sabado`)
    break;
}