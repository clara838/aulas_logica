for(let i = 0; i < 100; i++){
    console.log(i)
}

//entregando os notebooks por ordem
const prompt = require('prompt-sync')()
console.log("entregando notebooks")
for(let nr = 1; nr <= 32; nr++){
    let nome = prompt(`quem é o numero ${nr}`)
    let presente = prompt(`o (A) ${nome} veio para a escola? (S ou N) `)
    if(presente == 'S'){
        console.log(`pegar notebook ${nr}`)
        console.log(`pegar mouse ${nr}`)
        console.log(`pegar fonte ${nr}`)
        console.log(`levar notebook ate ${nome}`)

    }
    else{
        console.log(`NAO PEGAR NOTEBOOK ${nr}`)
    }
    
}