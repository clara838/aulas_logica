const prompt = require('prompt-sync')()

let preco = Number(prompt('Digite o preco do produto: '))

//desconto
let desconto = preco * 0.05;
console.log(`Preco sem desconton${preco.toFixes(2)}`);
console.log(`Preco com desconto ${precoComDesconto.toFixes(2)}`);