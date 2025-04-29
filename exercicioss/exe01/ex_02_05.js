const prompt = require('prompt-sync')()

//ano de nascimento
let anoNasc = parseInt(prompt('digite o ano de nascimento: '))
// veja se e maior ou menor de idade
if((2025 - anoNasc) >= 18){
    console.log('voce e maior de idade')
}else{
    console.log('voce é menor de idade')
}