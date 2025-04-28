function calcular(num1, num2, operador){
    if(operador === '+'){
        console.log(`${num1} + ${num2} = ${num1 + num2}`)
    
    }else if(operador === '-'){
        console.log(`${num1} + ${num2} = ${num1 - num2}`)

    }else if(operador === '*'){
        console.log(`${num1} + ${num2} = ${num1 * num2}`)

    }else if(operador === '/'){
        console.log(`${num1} + ${num2} = ${num1 / num2}`)

    }else if(operador === '**'){
        console.log(`${num1} + ${num2} = ${num1 ** num2}`)

    }
    else{
        console.log("oprador invalido");
        return;
    }
}
calcular(2, 4, '+')
calcular(2, 4, '-')
calcular(2, 4, '*')
calcular(2, 4, '/')
calcular(2, 4, '**')
calcular(2, 4, ';')


