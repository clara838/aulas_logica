const prompt = require ('prompt-sync')()

let ano = prompt("digite o ano atual")
let nasc = prompt("digite o ano de nascimento")
let idade = ano - nasc
switch(true){
    case idade <= 10:
    console.log("É crianca");
    break;
    case idade >= 11 && idade  <= 17:
    console.log("é adolescente");
    break;
    case idade >= 18 && idade <= 59:
    console.log("é adulto");
    break;
    case idade >= 60:
    console.log("é idoso");
    break;
    default:
        console.log("idade invalida")
}

    