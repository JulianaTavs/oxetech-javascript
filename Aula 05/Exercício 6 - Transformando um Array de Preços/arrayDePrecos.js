const precosDolares = [10, 20, 30]; 

const precoReais = converterMoeda(precosDolares); 

console.log(precoReais);

function converterMoeda(array) {
    const novoArray = array.map(element => element * 5);
    return novoArray;
}