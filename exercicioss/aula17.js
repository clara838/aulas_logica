//VARIAVEIS GLOBAIS E LOCAIS 

function nomeEscola(){
escola = 'SESI'
console.log(escola)
//declarando uma variavel local 
var cidade = cidadePara
}

//essa é um variavel global por que pode ser acessada em qualquer parte do codigo
var escola = 'senai'
console.log(escola)
nomeEscola('aracatuba')
console.log(cidade)
var cidade = "Mirandopolis"
console.log(cidade)



var x = 10  //variavel global
console.log('fora da funcao', x);

function minhaFuncao(){
    
    x = x + 1 
    console.log('dentro da funcao', x)
}

minhaFuncao()
x +=1
console.log("fora da funcao de novo", x)


