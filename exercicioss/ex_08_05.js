let numeros = []
for(let i = 0; i< 5; i++){
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1
    numeros.push(numeroAleatorio)
    console.log(`o dobro de ${numeros[i]} : ${numeros[i] * 2}`)
}