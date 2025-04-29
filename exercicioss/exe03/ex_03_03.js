const prompt = require ('prompt-sync')()
 
let mes = prompt("digite um mes")
if(mes == 'janeiro' || mes == 'marco' || mes == 'maio' || mes == 'julho' || mes == 'agosto' || mes == 'outubro' || mes == 'dezembro'){
    console.log('o mes tem 31 dias')
}
else if(mes == 'abril' || mes == 'junho' || mes == 'setembro' || mes == 'novembro'){
    console.log('o mes tem 30 dias')
}
else if(mes == 'fevereiro'){
    console.log(' o mes tem 28 dias')
}       