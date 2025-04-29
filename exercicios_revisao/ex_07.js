const prompt = require ('prompt-sync')()
let ganhoPorHora = Number(prompt('Qual seu ganho por hora?'))
let horasTrabalhadas = Number(prompt('Qual suas horas trabalhadas?'))
let multiplicacao = ganhoPorHora * horasTrabalhadas
console.log(`a multiplicacao entre ${ganhoPorHora} * ${horasTrabalhadas} é igual: ${multiplicacao}`);
let descontos = ganhoPorHora * horasTrabalhadas * 11 / 100
console.log(`o desconto de ${ganhoPorHora * horasTrabalhadas * 11 / 100} é igual a ${descontos}`)
let IR = ganhoPorHora * horasTrabalhadas * 8 / 100
console.log(`o imposto de renda de ${ganhoPorHora * horasTrabalhadas * 8 / 100} é igual a ${IR}`)
let INSS =  ganhoPorHora * horasTrabalhadas * 5 / 100
console.log(`o INSS de ${ganhoPorHora * horasTrabalhadas * 5 / 100} é igual a ${INSS}`)
let salarioLiquido = ganhoPorHora * horasTrabalhadas - descontos 
console.log(`o salario bruto ${ganhoPorHora * horasTrabalhadas - descontos} é igual a ${salarioLiquido} `)