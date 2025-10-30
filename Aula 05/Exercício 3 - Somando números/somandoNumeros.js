const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1];
let resultado = somarNumeros(numeros);
console.log(`Soma dos números divisíveis por 2 e 3 => ${resultado}`);


function somarNumeros(array) {
    let soma = 0;
    const arrayDosNumerosSomados = [];

    for (let index in array) {
        if (array[index] % 2 === 0 &&
            array[index] % 3 === 0) {
            soma += array[index];

            arrayDosNumerosSomados.push(array[index]);

        }
    }
    console.log(`Números encontrados que são divisíveis por 2 e 3 => ${arrayDosNumerosSomados.join(", ")}`);
    return soma;
}
