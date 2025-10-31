function criarUsuário(nome, idade, email) {
    const usuario = {
        nome: nome,
        idade: idade,
        email: email
    };
    return usuario;
}

const usuarioSaida = criarUsuário("Jorge", 17, "jorginho@hotmail.com");
console.log(usuarioSaida);