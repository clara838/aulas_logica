const prompt = require ('prompt-sync')()
let altura = Number(prompt('digite sua altura: '))
let sexo = (prompt('digite seu sexo: '))

if(sexo == "F"){
    let pesoIdealFem =  (72.7 * altura) - 58
    console.log(`seu peso ideal é ${pesoIdealFem}`)
}else if (sexo == "M" ){
        let pesoIdealMas =  (62.1 * altura) - 44.7
        console.log(`seu peso ideal é ${pesoIdealMas}`)
    }
    else{
    console.log('invalido')
}
