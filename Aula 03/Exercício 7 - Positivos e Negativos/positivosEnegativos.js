let positivos = 0;
let negativos = 0;

while (true) {
    let input = prompt("Digite um número inteiro(Digite 0 para encerrar): ");

    if (input === null) {
        console.log("Processo cancelado pelo usuário.");
        break;
    }

    let i = parseInt(input);

    if (isNaN(i)) {
        console.log("Entrada inválida. Por favor, digite um número inteiro.");
        continue; // Pula para a próxima iteração do loop
    }

    if (i === 0) {
        console.log("Número 0 detectado. Encerrando contagem.");
        break;
    }
    if (i > 0) {
        positivos++;
    } else {
        negativos++;
    }
}

console.log(`Quantidade de números positivos: ${positivos}\nQuantidade de números negativos: ${negativos}`);
