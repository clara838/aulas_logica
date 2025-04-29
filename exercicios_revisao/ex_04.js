const prompt = require ('prompt-sync')()
let ganhoPorHora = Number(prompt('Qual seu ganho por hora?'))
let horasTrabalhadas = Number(prompt('Qual suas horas trabalhadas?'))
let multiplicacao = ganhoPorHora * horasTrabalhadas
console.log(`a multiplicacao entre ${ganhoPorHora} * ${horasTrabalhadas} é igual: ${multiplicacao}`);
