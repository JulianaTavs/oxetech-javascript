const vendas = [150, 200, 100, 50];  

let totalVendas = calcularTotalVendas(vendas);  

console.log(totalVendas);

function calcularTotalVendas(array) {
    
    const somaTotal = array.reduce((acumulador, elementoAtual) =>
    {
        return acumulador + elementoAtual;
    }, 0);
    
    return somaTotal;
}