const prompt = require('prompt-sync')()
function cabecalho(texto){
    console.log('---------------------------')
    console.log(texto)
    console.log('---------------------------')
}

//criando outra funcao, funcao de saudacao
function saudacao(){
    let nome = prompt('digite seu nome: ')
    console.log(`${nome} tenha um bom dia`)
}
//chamando a funcao
cabecalho('SESI/SENAI')
let escola = 'sesi 025'
cabecalho(escola)
saudacao()


//criei  a funcao soma que ira receber dois valores como parametro 
//a partir desses valores, realizarano calculo e mostrara o resultado
function soma(n1, n2){
let resultado = n1 + n2
console.log(resultado)
}
soma(5,6)
soma(8, 9)
soma(8, 18)

function ParImpar(num){
    if(num % 2 == 0){
        console.log(`${num} é par`)
    }else{
        console.log(`${num} é impar`)
    }

}
ParImpar(5)
ParImpar(8)
//funcao com retorno do resultado
//o calculo e realizado e é retornado para a chamada da funcao 
function media(n1, n2){
let resultado = (n1 + n2) / 2;
return(resultado)
}

console.log(media(6, 8))
//armazanei o retorno da funcao em uma variavel
let valor = media(9, 7);
//ultilizei o retorno da funcao para escrever na tela 
console.log(valor)
//ultilizei a variavel que recebeu o retorno da funcao para
//chamar a funcao Par ou Impar passando o valor como parametro
ParImpar(valor)

