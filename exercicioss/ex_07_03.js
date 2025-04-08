const prompt = require ('prompt-sync')()

let comidas = []
for(let i = 0; i < 6; i++){
    let comida = prompt(`digite o nome da comida ${i + 1}`)
    comida.push(comida)
    console.log(comidas)
    console.log(comidas[0])
}


