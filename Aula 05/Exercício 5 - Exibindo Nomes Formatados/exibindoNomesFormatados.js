const nomes = ['Lucas', 'Marina', 'João'];

exibirNomes(nomes);

function exibirNomes(array) {
    array.forEach(element => {
        console.log(`Bem vinda(o), ${element}!`)
    });
}