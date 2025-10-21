let idade;
while (true) {
    idade = Number(prompt("Qual a sua idade? (Apenas números): "));

    if (isNaN(idade) || !Number.isInteger(idade) || idade < 0) {
        alert("Erro: Por favor, digite uma idade válida (número inteiro não negativo). ");
    }
    else {
        if (idade >= 65) {
            alert(`Você é um idoso.`);
        }
        else if (idade >= 18) {
            alert(`Você é um adulto.`);
        }
        else if (idade >= 13) {
            alert(`Você é um adolescente.`);
        }
        else {
            alert(`Você é uma criança.`);
        }
        break;
    }
}

