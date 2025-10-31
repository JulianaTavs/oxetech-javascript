const produtos = [
    { nome: "Celular", preco: 2000, estoque: 5 },
    { nome: "Notebook", preco: 3500, estoque: 0 },
    { nome: "Fone de Ouvido", preco: 250, estoque: 12 }
];

// Listar disponíveis
console.log(gerenciarProdutos(produtos, "listarDisponiveis"));
// Resultado esperado: [Celular, Fone de Ouvido]

// Buscar um produto
console.log(gerenciarProdutos(produtos, "buscarProduto", "Notebook"));
// Resultado esperado: { nome: "Notebook", preco: 3500, estoque: 0 }

// Calcular valor total
console.log(gerenciarProdutos(produtos, "calcularValorTotal"));
// Resultado esperado: 2000*5 + 250*12 = 10000 + 3000 = 13000

// Atualizar estoque
gerenciarProdutos(produtos, "atualizarEstoque", "Notebook", 3);
console.log(produtos[1].estoque);
// Resultado esperado: 3

function gerenciarProdutos(arrayProdutos, comando, produto, novaQtde) {
    let soma = 0;
    switch (comando) {
        case "listarDisponiveis":
            const arrayFiltrado = arrayProdutos
                .filter(element => element.estoque > 0)
                .map(element => element.nome);

            return arrayFiltrado;
        case "buscarProduto":
            const elementoEncontrado = arrayProdutos.find(element => element.nome === produto);
            return elementoEncontrado;
        case "calcularValorTotal":
            arrayProdutos
                .forEach(element => {
                    if (element.estoque > 0) {
                        soma += element.preco * element.estoque;
                    }
                });
            return soma;
        case "atualizarEstoque":
            arrayProdutos
                .forEach((element, indice) => {
                    if (element.nome === produto) {
                        element.estoque = novaQtde;
                    }
                });
            break;
    }
}