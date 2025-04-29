let contador = 1;

//ira repetir enquanto a condicao for verdadeira
// ou seja sera verdade enquanto o contador for menor ou igual a 5 
while(contador <= 5){
console.log(`o contador é ${contador}`)
//incrementando a variavel ou seja adicionando valor a ela 
//para que conitnue o processo ate que a conducao seja atingida
contador = contador + 1;

}
console.log("fim")


const prompt = require ('prompt-sync')()
let senha_senai = '12345'
while(true){
    let senha = prompt("digite a senha: ");
    if(senha_senai == senha){
        console.log('voce hackeou a senha');
    break;
    }else if(senha == 'desisto'){
        break;
    }
}

//laços de repeticao(while)

let soma = 0
let qtd = 0 

while(true){
    let valor = Number(prompt('digite o valor do produto(0 para encerrar): '));
    if(valor == 0){
        break;
    }
    else{
        soma = soma + valor; 
        qtd++;
    }
}
console.log(`foram informados ${qtd}`);
//toFixed para colocar somente dois digitos apos a virgula 
console.log(`valor total dos produtos ${soma.toFixed(2)}`);


let soma2 = 0
let qtd2 = 0 
let encerrar = ""

while(encerrar != "sub-total"){
    let valor = Number(prompt('digite o valor do produto: '));
        soma2 = soma + valor; 
        qtd2++;
        encerrar = prompt("deseja continuar: (digite sub-total) ")
    }

console.log(`foram informados ${qtd}`);
//toFixed para colocar somente dois digitos apos a virgula 
console.log(`valor total dos produtos ${soma.toFixed(2)}`);


console.log("########################################")
console.log("❤️ JOGO DA ADVINHAÇÃO 💕")
console.log("########################################")

let nrSorteado = Math.floor(Math.random() * 100 + 1); //gera um numero aleatorio
let acertou = false;

while(!acertou){
    const chute = parseInt(prompt('🦋 digite um numero entre 1 e 100 para adivinhar 🦋'))

if(chute > nrSorteado){
    console.log(`voce chutou ${chute}, tente um numero menor 😊!`);
}
else if(chute < nrSorteado){
    console.log(`voce chutou ${chute}, tente um numero maior`);
}
else if(chute == nrSorteado){
    console.log(`voce chutou ${chute}, parabens voe acertou!! 👏`);
    acertou = true;
}

}
