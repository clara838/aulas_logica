const prompt = require('prompt-sync')()

//estrutura condicional aninhada
let idade =  Number(prompt('digite a sua idade: '))
if(idade >= 18 && idade <= 70){
 console.log("Voto obrigatorio")
}
else{
    if(idade < 16){
console.log("Voce nao pode votar!")
    }else{
        if(idade >= 16 || idade > 70){
            console.log("voto facultativo")
        }
    }
}


// Switch Case  Estrutura de controle dfe fluxo para tomar decisoes 
// com base no valor de uma variavel
let n1 = Number(prompt('digite o primeiro numero'))
let n2 = Number(prompt('digite o segundo numero'))
let op = prompt('escolha a operacao (+, -, *, /, **')

//testa o valor da variavel se é true
switch(op){
    //caso a variavel op seja verdadeira, testara cada condicao 
    //caso uma condicao seja igual a um dos "cases" executara
    //o bloco em questao, usamos o break para interromper o processo
    case '+': 
    console.log(`resultado: ${n1 + n2}`)
    break;
case '-':
        console.log(`resultado: ${n1 - n2}`)
        break;
        case '*':
console.log(`resultado: ${n1 * n2}`)
     break;
     case '/':
        console.log(`resultado: ${n1 / n2}`)
             break;
             case '**':
console.log(`resultado: ${n1 ** n2}`)
     break;
}

//verificar qual letra é igual 
let letra = prompt('digite uma letra: ').toUpperCase();
//quando usamos switch(variavel), o switch compara o valor da variavel com os cases definidos
switch(letra){
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
console.log('Vogal')
break:
default:
console.log('Consoante')
}

//converter a nota em numero para letra
let nota = parseInt(prompt("digite a nota do aluno: "))
// o switch(true) verifica quais expressoes dentro do case retornam true(verdade), ou seja comparamos as expressoes booleanas
switch(true){
    caso nota >= 90:
    console.log("Nota A");
    break:
case nota >= 80:
    console.log("Nota B");
    break:
case nota >= 70:
    console.log("Nota C");
    break:
    case nota >= 60:
        console.log("Nota D")
        break:
        default:
            console.log("nota E")
}