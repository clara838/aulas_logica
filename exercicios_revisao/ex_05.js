const prompt = require ('prompt-sync')()
 let letra = Number(prompt('digite uma letra: '))

 if(letra == F){
    console.log('é F de feminino')
 }else if (letra == M){
    console.log('é M de masculino')
}else{
    console.log(`a letra ${letra} nao é a letra pedida`)
}
