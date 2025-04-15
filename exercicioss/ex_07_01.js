const prompt = require ('prompt-sync')()
let filmes = ["O Auto da Compadecida 2", "Quatro Vidas de um Cachorro", "Rio", "Homem-Aranha", "Sr. & Sra. Smith", "shrek", "wicked"]
console.log(filmes[0])
filmes[4] = "homem aranha"
filmes.push('encanto')
filmes.splice(3, 0, 'sr. & sra.smith')
filmes.shift()
filmes.pop()
console.log(filmes.slice(0,3))
console.log(filmes.slice(4,7))
console.log(filmes.length)
filmes.reverse()
