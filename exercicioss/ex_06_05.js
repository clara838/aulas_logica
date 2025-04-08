const prompt = require ('prompt-sync')()
let idade = 0 
let sexo;
let mediaH = 0
let qtdH = 0
let mediaF = 0
let qtdF = 0

for(let i = 0; i < 10; i++){
idade = Number(prompt('digite a idade: '))
sexo = prompt('digite o sexo: (m ou f): '). toUpperCase()
if(sexo == 'm'){
mediaH += idade;
qtdH++;
}else{
    mediaF += idade;
    qtdF++
}

}console.log(`a media da idade dos homens: ${mediaH / qtdH}`)
console.log(`a media da idade das mulheres: ${mediaF / qtdF}`)

