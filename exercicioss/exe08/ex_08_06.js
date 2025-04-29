const prompt = require('prompt-sync')()
const vogais = ['a', 'e', 'i', 'o', 'u']
let consoantes = ['b', 'c', 'd', 'f','g','h', 'j', 'k', 'l', 'm','n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let palavra = prompt('digite uma palavra: ')
let qtdVogais = 0
for(let letra of palavra){
    if(vogais.includes(letra)){
        qtdVogais++
    }
}
console.log(`${palavra} tem ${qtdVogais} vogais`)

