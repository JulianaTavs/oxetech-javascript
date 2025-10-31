const usuario = { nome: "Marcos", idade: 19, email: "marquinhos@hotmail.com" };

atualizarIdade(usuario, 25);

console.log(`A idade atualizada do usuário '${usuario.nome}' é '${usuario.idade}'`);  
// Resultado esperado: 25

function atualizarIdade(objetoUsuario, novaIdade) {
    objetoUsuario.idade = novaIdade;
}

