const prompt = require ('prompt-sync')()

let ano = prompt("digite o ano atual")
let nasc = prompt("digite o ano de nascimento")
let subtracao = ano - nasc
if(subtracao < 10){
    console.log("é crianca")
} 
else if (subtracao == "11" || subtracao == "12" || subtracao == "13" || subtracao == "14" || subtracao == "15" || subtracao == "16" || subtracao == "17"){
    console.log ("é adolescente")
}
else if (subtracao > 60){
    console.log ("é idoso") 
}

