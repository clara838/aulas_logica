// importando a biblioteca para a entrada de dados
const prompt = require ('prompt-sync')()

// Variaveis e constantes
// Passo 1: receber o nome da pessoa 
let nome= 'Ayrton'
// Passo 2: receber a idade da pessoa
let idade= 36
// Passo 3: receber o peso da pessoa 
let peso= 76.5
// Passo 4: exibir o nome, a idade e o peso
console.log(nome,idade,peso)

//REcer e armaneza o texto em uma variavel
let  curso =    "desenvolvimento de sistemas"
// #tipo nome recebe   valor   na variavel

//Exibir o valor armazenado 
console.log("curso")//Imprimindo uma string (texto)
console.log(curso)//imprimi o valor que esta dentro da variavel 
console.log("curso" , curso)
//criando e atribuido valor a outras variaveis
let idade2 = 35 // valor do tipo int 
let temperatura = 23.5 //valor do tipo float
let nome2 = "lyuz"

console.log("ola", nome2, "voce tem:", idade2,"e hoje esta fazendo", temperatura, "ºC")

//usando template string
console.log(` ola ${nome2}, voce tem ${idade2} e hoje esta fazendo: ${temperatura} ºC `)

let chovendo = false 
let dia = true 
// as constantes nao podem ser reatribuidos novos valores 
const PI = 3.1415
console.log(PI)

// Ultilizando prompt para receber dados 
//Entrada de dados

//no prompt sempre recebemos uma string
nome = prompt ('qual o seu nome?')
//usando o parseint ou parsefloat converte os valores recebidos 
//que vem como string para int ou float
idade = parseInt(prompt('qual sua idade?'))

peso = parseFloat(prompt('qual seu peso?'))
console.log(`seu nome é ${nome}, voce tem ${idade} e pesa ${peso}`)

console.log(typeof(idade))
console.log(typeof(peso))
//apos a conversao dos valores e possivel realizar
//calculos matematicos
console.log(idade+peso)