const prompt = require('prompt-sync')()

console.log("bem vindo ao curso de Javascript")
console.log("estou aprendendo a usar o console.log")
console.log(15 + 25);
console.log(100 - 45);
console.log(12 * 7)
console.log(144 /12)
console.log(20 % 3)
console.log(2 ** 5)

//exercicios de variaveis 
let nomeAluno = "clara"
let altura = "1.64"
let escola = "sesi"
let ano = "2025"
//exibir os valores
console.log(`o aluno ${nomeAluno} tem de altura ${altura} e estuda na escola ${escola} no ano de ${ano}` )

//2- crie 3 variaveis e atribua valores
let nomeProfessor = "denise"
let materia = "portugues"
let anoIngresso = "2000"
//exibir valores das variaveis
console.log(`a professora ${nomeProfessor} que leciona a materia ${materia} no ${ano}. E ingressou na ${escola} no ano de ${anoIngresso}`)

//reatribuindo valores as nossas variaveis 
nomeAluno = prompt('digite o nome do aluno? ')
altura = parseFloat(prompt('digite a altura?'))
escola = prompt('digite o nome da escola ')
ano = parseInt(prompt('digite o ano da turma? '))
console.log(`a aluna ${nomeAluno} tem ${altura} estuda na escola ${escola} no ano de ${ano}`)

nomeProfessor = prompt('digite o nome do professor: ')
materia = prompt('digite o nome da materia: ')
anoIngresso = parseInt(prompt('digite o ano de ingresso'))
