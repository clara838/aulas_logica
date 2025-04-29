const prompt = require ('prompt-sync')()
let inicio = Number(prompt('digite o valor do inicio: '))
let fim = Number(prompt('digite o valor do fim: '))
let passo = Number(prompt('digite o valor do passo:' ))

for(inicio; inicio < fim; inicio+=passo){
    console.log(`valor inicial: ${inicio}`)
    console.log(`valor final: ${fim}`)
    console.log( `valor de passos: ${ passo}`)
    console.log(`================================`)
}