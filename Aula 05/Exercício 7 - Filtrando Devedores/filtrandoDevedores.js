const dividas = [95.90, 180.50, 22.99, 105.99, 30.50];  

const devedores = filtrarDevedores(dividas);  

console.log(devedores);

function filtrarDevedores(array) {
    const arrayFiltrado = array.filter(element => element > 80.00)
                               .map(element => element.toFixed(2));
    return arrayFiltrado;
}