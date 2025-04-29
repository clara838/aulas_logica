function gerarSenha(tamanhoSenha){
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let senha = ''
    for(let i = 0; i < tamanhoSenha; i++){
        let letraSorteada = Math.floor(Math.random() * caracteres.length) 
        senha += caracteres[letraSorteada]
    }
    return senha;
}

console.log('Senha dde 6 caracteres: ', gerarSenha(6));
console.log('Senha dde 10 caracteres: ', gerarSenha(10));