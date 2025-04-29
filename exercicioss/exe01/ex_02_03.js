const prompt = require('prompt-sync')()


let numero = parseInt(prompt('Digite um numero: '))

let resto = numero % 2 

if(resto == 0){
    console.log(`${numero} é PAR`);

}else{
    console.log(`${numero} é impar`)
}