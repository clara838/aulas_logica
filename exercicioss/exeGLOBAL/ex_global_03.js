let listaNomes = []
function adicionarNome(nome){
    listaNomes.push(nome);
}

function removerNome(){
    listaNomes.pop()
}

//
function removerPorNome(nome){
    let posicao = listaNomes.indexOf(nome)
//quando o indexof nao encontra o elemento ele retorna -1
    if(posicao != -1){
        listaNomes.splice(posicao, 1)
    }
}

adicionarNome('ana')
adicionarNome('camila')
adicionarNome('matheus')
console.log(listaNomes)
adicionarNome('garro')
console.log(listaNomes)
removerNome()
console.log(listaNomes)
removerPorNome('camila')
console.log(listaNomes)