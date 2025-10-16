let estoqueAtual = parseInt(prompt("Informe a quantidade atual no estoque: "));
let quantidadeARemover = parseInt(prompt("Informe a quantidade que deseja remover: "));
let sobra = estoqueAtual - quantidadeARemover;
let resultadoOperacao = estoqueAtual >= quantidadeARemover ? `Estoque atualizado: ${sobra}` : "Operação inválida: quantidade insuficiente no estoque";

console.log(resultadoOperacao);