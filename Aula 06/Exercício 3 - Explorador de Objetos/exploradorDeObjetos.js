const pessoa = {
    nome: "Ana",
    idade: 28,
    cidade: "Recife"
};

console.log(explorarObjeto(pessoa, "chaves"));
// Resultado esperado: ["nome", "idade", "cidade"]

console.log(explorarObjeto(pessoa, "valores"));
// Resultado esperado: ["Ana", 28, "Recife"]

console.log(explorarObjeto(pessoa, "entradas"));
// Resultado esperado: [["nome", "Ana"], ["idade", 28], ["cidade", "Recife"]]

console.log(explorarObjeto(pessoa, "teste"));
// Resultado esperado: "Operação inválida."

function explorarObjeto(objetoPessoa, operacao) {
    switch (operacao) {
        case "chaves":
            return Object.keys(objetoPessoa);
        case "valores":
            return Object.values(objetoPessoa);
        case "entradas":
            return Object.entries(objetoPessoa);
        default:
            return "Operação inválida.";
    }
}