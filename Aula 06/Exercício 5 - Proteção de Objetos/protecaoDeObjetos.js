const produto = { nome: "Câmera", preco: 1200 };

const resultado = protegerObjeto(produto, "congelado");

console.log(resultado);

function protegerObjeto(objeto, modoProtecao) {
    switch (modoProtecao) {
        case "extensivel":
            Object.preventExtensions(objeto);
            return `{ extensível: ${Object.isExtensible(objeto)}, selado: ${Object.isSealed(objeto)}, congelado: ${Object.isFrozen(objeto)}}`;
        case "selado":
            Object.seal(objeto);
            return `{ extensível: ${Object.isExtensible(objeto)}, selado: ${Object.isSealed(objeto)}, congelado: ${Object.isFrozen(objeto)}}`;
        case "congelado":
            Object.freeze(objeto);
            return `{ extensível: ${Object.isExtensible(objeto)}, selado: ${Object.isSealed(objeto)}, congelado: ${Object.isFrozen(objeto)}}`;
    }
}