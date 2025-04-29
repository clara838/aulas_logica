const prompt = require('prompt-sync')()
let altura = Number(prompt('digite sua altura:'))
 let peso = Number(prompt('digite seu peso:'))
 let imc = peso / (altura ** 2)
 if(imc < 18.5){
    console.log('abaixo do peso ideal')
 }else if(imc >= 18.5 && imc < 25){
    console.log('peso ideal')
 }else if(imc >= 25 && imc < 30){ 
    console.log('Sobrepeso')
}else{
    console.log('obesidade')
}


let lado1 = Number(prompt('digite o valor do lado 1: '))
let lado2 = Number(prompt('digite o valor do lado 2: '))
let lado3 = Number(prompt('digite o valor do lado 3: '))

//verificar se o triangulo é equilatero caso tenha todos os 
//lados iguais 
let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)
console.log('Triangulo Equilatero ?' , eq, 'Triangulo escaleno', es)

//exercicio
let lado4 = Number(prompt('digite o valor do lado 4: '))
let lado5 = Number(prompt('digite o valor do lado 5 '))
let lado6 = Number(prompt('digite o valor do lado 6: '))
if(lado4 == lado5 && lado5 == lado6){
   console.log ('Triangulo Equilatero')
}
else if(lado4 != lado5 && lado5 != lado6 && lado4 != lado6){
   console.log('Triangulo Escaleno')
}
else{
   console.log('Triangulo Isosceles')
}

//descobrir a quantidade de horas trabalhadas
let horas = Number(prompt('total de horas trabalhadas: '))
let vendas = Number(prompt('total de vendas: '))

//validar se uma das condicoes foi atendida (mais de 5000 em vendas ou mais de 40 horas trabalhada)
if(vendas > 5000 || horas > 40){
console.log("tem direito ao bonus")
}
else{
   console.log("nao tem direito ao bonus")
}

let letra = prompt('digite uma letra: ')
//sinal de comparacao do "ou"=||
//sinal logico do "e" = &&
if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
   console.log(`a letra ${letra} é uma vogal`)
}
else{
   console.log(`a letra ${letra} é uma consoante`)
}
