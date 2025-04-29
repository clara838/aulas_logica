
let saldo = 0

//criar a funcao depositar
function depositar(valorDeposito){
saldo += valorDeposito
}

//criar a funcao sacar
function sacar(valorSaque){
    saldo -= valorSaque 
}

//funcao mostrar saldo
function mostrarSaldo(){
    console.log(` seu saldo: ${saldo}`)
}


//menu criativo
function caixaEletronico(){
    const prompt = require(`prompt-sync`)
    let opcao = 0; 

    while(opcao != 4){
        console.log('=== caixa Eletronico ===')
        console.log('[1] - Depositar')
        console.log('[2] - sacar')
        console.log('[3] - mostrar saldo')
        console.log('[4] - sair')
        
        opcao = Number(prompt("escolha uma opcao: "))
        
        switch(opcao){
            case 1: 
            let valorDeposito = Number(prompt("digite o valor a ser depositado"))
            depositar(valorDeposito)
            break;
            case 1: 
            let valorSaque = Number(prompt("digite o valor a ser sacado"))
            sacar(valorSaque)
            break;
            case 3:
                mostrarSaldo()
                 break;
        
            case 4:
                console.log("obrigado por usar o banco barreto")
                break
                default:
                    console.log('opcao invalida')
        }
    }
}

caixaEletronico()