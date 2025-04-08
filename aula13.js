//declarando um novo vetor
//reconheco que é um vetor pelo numero dos colchetes 
let listaVazia = [];
console.log(listaVazia);

//declarar uma lista de numeros 
let numeros = [1,2,3,4,5,6];
console.log(numeros);
console.log(numeros [2])

// declaraco de uma lista de strings
let nomes = ["ana", "joao", "maria"];
console.log(nomes)

//declaracao de uma lista mista 
let listaMista = [1, "dois", true, 2,5]
console.log(listaMista);

let listaComLista = [
    ["coca-cola", "cachorro-quente"],
    [5.0, 10.0]
]
console.log(listaComLista)

//alterando valores da lista 
let frutas = ['maca', 'pera', 'uva', 'abacaxi']
console.log(frutas);
//a funcao push adiciona um novo elemnto no vetor
frutas.push('laranja')
console.log(frutas)
//o spread adiciona um novo elemento no vetor 
frutas = [...frutas, 'banana']
console.log(frutas);

//a funcao splice adiciona um novo item em uma posicao 
//especifica a partir de um valor indice
frutas.splice(2, 0, 'morango')
console.log(frutas);

//excluindo item na lista
frutas.splice(3,1) // excluindo item pelo indice 
console.log(frutas)
frutas.shift() //excluindo primeiro item da lista
frutas.pop() //excluir ultimo item da lista 
console.log(frutas)

//acessar os itens da lista 
console.log(frutas[3]); //acesso a partir uma posicao especifica 
console.log(frutas.slice(0,4)) //posicao 0 ate 4
console.log(frutas.slice(1)) //a partir da posi 1
console.log(frutas.slice(-1)) //mostra os itens do fim para o inicio
console.log(frutas.lenght); //total de itens na lista 

//ordenar itens da lista 
console.log(frutas)
frutas.sort()//ordenar a lista de forma crescente 
console.log(frutas)
frutas.reverse()//ordenando de forma decrescente 
console.log(frutas)