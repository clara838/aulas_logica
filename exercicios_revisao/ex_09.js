const prompt = require ('prompt-sync')()
let numero = (prompt("digite um numero: "))
let resto = numero % 2 

if(resto == 0){
    console.log(`${numero} é um numero par`);

}else{
    console.log(`${numero} é um numero impar`)
}