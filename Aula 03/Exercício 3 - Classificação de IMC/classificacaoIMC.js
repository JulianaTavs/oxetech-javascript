while (true) {
    let pesoString = prompt("Peso (kg): ").trim();
    let alturaString = prompt("Altura (m): ").trim();

    let peso = Number(pesoString.replace(',', '.'));
    let altura = Number(alturaString.replace(',', '.'));

    let imc = peso / (altura * altura);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Erro: Valores inválidos. Digite apenas números positivos para Peso e Altura.");
    }
    else {
        if (imc < 18.5) {
            alert(`Seu IMC é: ${imc.toFixed(2)}\nAbaixo do peso.`);
        } else if (imc <= 24.9) {
            alert(`Seu IMC é: ${imc.toFixed(2)}\nPeso normal.`);
        } else if (imc <= 29.9) {
            alert(`Seu IMC é: ${imc.toFixed(2)}\nSobrepeso.`);
        } else if (imc <= 34.9) {
            alert(`Seu IMC é: ${imc.toFixed(2)}\nObesidade grau 1.`);
        } else if (imc <= 39.9) {
            alert(`Seu IMC é: ${imc.toFixed(2)}\nObesidade grau 2.`);
        } else {
            alert(`Seu IMC é: ${imc.toFixed(2)}\nObesidade grau 3.`);
        }
        break;
    }
}

