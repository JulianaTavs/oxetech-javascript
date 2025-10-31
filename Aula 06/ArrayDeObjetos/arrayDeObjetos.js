const produtos = [
    {
        id: 1,
        nome: "Café",
        preco: 9.9,
        categoria: "Bebidas",
        emEstoque: true,
        estoque: 25,
    },
    {
        id: 2,
        nome: "Leite",
        preco: 5.5,
        categoria: "Bebidas",
        emEstoque: true,
        estoque: 40,
    },
    {
        id: 3,
        nome: "Pão",
        preco: 7.0,
        categoria: "Padaria",
        emEstoque: false,
        estoque: 0,
    },
    {
        id: 4,
        nome: "Queijo",
        preco: 22.9,
        categoria: "Frios",
        emEstoque: true,
        estoque: 12,
    },
    {
        id: 5,
        nome: "Bolo de Chocolate",
        preco: 15.0,
        categoria: "Padaria",
        emEstoque: false,
        estoque: 0,
    },
];

// 1. Listar apenas nomes e preços
const novoArray = produtos.forEach(element => {
    console.log(`${element.nome} - R$ ${element.preco.toFixed(2)}`)
});

// 2. Criar um array com os nomes
const arrayNomes = produtos.map(element => element.nome);
console.log(arrayNomes);

// 3. Filtrar produtos em estoque
const arrayFiltrado = produtos.filter(element => element.estoque > 0);
console.log(arrayFiltrado);

// 4. Calcular o preço total de todos os produtos
const arrayPrecoTotel = produtos.reduce((acumulador, elementoAtual) => {
    let valorTotalElementoAtual = elementoAtual.preco * elementoAtual.estoque;
    return acumulador + valorTotalElementoAtual;
}, 0);
console.log(`Preço total dos produtos: R$ ${arrayPrecoTotel.toFixed(2)}`);

// 5. Encontrar um produto específico
const produtoEspecifico = produtos.find(element => element.nome === "Leite");
console.log(produtoEspecifico);
