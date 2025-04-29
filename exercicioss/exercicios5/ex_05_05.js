const prompt = require ('prompt-sync')()

let numero = parseInt(prompt('digite um numero: '))
let fatorial = 1 
let i = numero;
let sequencia = numero + "! =" //concatenando valores

while(i >= 1){
    fatorial = fatorial * i;
    sequencia = sequencia + i;
    if(i > 1){
        sequencia = sequencia + ' * '
    
    }
    i--; //decretando contador 
}
sequencia = sequencia + " = " + fatorial
console.log(sequencia)