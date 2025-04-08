const prompt = require ('prompt-sync')()

let nr1 = Number (prompt("digite um numero"))
let nr2 = Number (prompt("digite outro numero"))
let soma = nr1 + nr2 / 2
let media = soma / 2

if(media > 7){
    console.log('aprovado')
}
else if(media == "5" || media == "6" || media == "7"){
    console.log('em recuperacao')
}
else if(media < 5){
    console.log('reprovado')
}