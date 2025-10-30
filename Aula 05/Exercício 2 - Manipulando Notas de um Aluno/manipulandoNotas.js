const notas = [5, 8, 9, 3, 10, 7];

function calcularMedia(array) {
    let soma = 0;
    array.sort((a, b) => b - a);
    const subString = array.slice(0, 3);

    subString.forEach(element => {
        soma += element;
    });

    let media = soma / subString.length;
    return media;
}

let mediaTresMelhores = calcularMedia(notas);
console.log(mediaTresMelhores.toFixed(1));