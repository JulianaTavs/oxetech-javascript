const produtos = [
    { nome: "Teclado", preco: 100 },
    { nome: "Monitor", preco: 800 },
    { nome: "Webcam", preco: 250 }
];

console.log("Catálogo de Produtos: ");
exibirCatalogo(produtos);

function exibirCatalogo(arrayDeObjetos) {
    for (let indice in arrayDeObjetos) {
        console.log(`${arrayDeObjetos[indice].nome} - R$${arrayDeObjetos[indice].preco}`)
    }
}