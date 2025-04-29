const prompt = require ('prompt-sync')()

let nota1 = Number (prompt("digite um numero: "))
let nota2 = Number (prompt("digite outro numero: "))
let media = (nota1 + nota2) / 2;

switch(true){
    case media >= 7:
    console.log("aprovado");
    break
        case media <= 5 && media >= 7:
        console.log("recuperacao");
        break
            case media <= 5:
            console.log("reprovado");
                break
                default:
                    console.log('valor invalido')
            }