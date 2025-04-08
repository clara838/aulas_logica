let dias = parseInt(prompt('Digite a quantidade de dias que o carro foi alugado'))
let kmPercorrido = parseFloat(prompt('Digite a qtd de km percorrido: '))

//calcular o custo por dia e por km
let custoPorDia = 60;
let custoPorKM = 0.15;

//calcular custo total 
let custoTotal = (dias * custoPorDia) + (kmpercorrido * custoPOrKM)
console.log(`Custo da viagem: ${custoTotal.toFixed(2)}`);