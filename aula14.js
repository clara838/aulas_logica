let frutas = ['maca', 'banana', 'uva', 'abacaxi']

//a variavel x serve para iterar os valores ate o limite da lista,
//  o nome nao e obrigatoriamnete ser o nome i. x ou contador
//pode ser qualquer nome de variavel
for(let x = 0; x < frutas.length; x++){
    //o lenght identifica o tamanho total da lista
    console.log(`a fruta é ${frutas[x]}`)
}

let listaNomes = ['bill gates', 'rafinha', 'raul seixas', "esteves"]
//para cada nome da lista nomes, escreva um nome 
for(let nomes of listaNomes){
    console.log(nomes)
}

const prompt = require('prompt-sync')()
const vogais = ['a', 'e', 'i', 'o', 'u']
let consoenantes = ['b', 'c', 'd', 'f','g','h', 'j', 'k', 'l', 'm','n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let letras = prompt('digite uma letra: ')

if(vogais.includes(letras.toLowerCase())){
    console.log('é uma vogal')

}else if(consoenantes.includes(letras.toLowerCase())){
    console.log('consoante');}
    else{console.log('nao é uma letra')}

    //obtendo a posicao do item
    for(let[pos,fruta] of frutas.entries()){
        console.log(`posicao${pos} e fruta ${fruta}`)
    }

    let produtos = 'celular, notebook, tv, tablet, headset'
    let listaProdutos = produtos.split(',')
    for(let produto of listaProdutos){
        console.log(produto)
    }

    //percorrendo uma string como uma lista(lista de caracteres)
    let palavras = 'SENAI'
    for(let letra of palavras){
        console.log(letra)
    }