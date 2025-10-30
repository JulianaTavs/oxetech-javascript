const numeros = [-1, 3, 8, -2, 4, 10];

let maior = obterMaior(numeros);

let menor = obterMenor(numeros);

console.log(maior, menor);

function  obterMaior(array) {
    let maiorValor = Number.MIN_VALUE;
    for (let value of array) {
        if (value > maiorValor) {
            maiorValor = value;
        }
    }
    return maiorValor;
}

function obterMenor(array) {
    let menorValor = Number.MAX_VALUE;
    for (let value of array) {
        if (value < menorValor) {
            menorValor = value;
        }
    }
    return menorValor;
}