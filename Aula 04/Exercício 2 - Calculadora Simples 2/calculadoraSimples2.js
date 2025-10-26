while (true) {
    let numero1 = validandoNumeros("Digite o primero número: ");
    let numero2 = validandoNumeros("Digite o segundo número: ");
    let operador_Matematico = validandoOperador("Digite o operador matemático(+, -, *, /, %): ");

    calcular(numero1, numero2, operador_Matematico);

    let continuar = confirm("Deseja continuar?");

    if (!continuar) {
        alert("Encerrando aplicação.");
        break;
    }
}

function calcular(num1 = 1, num2 = 1, operadorMatematico = '+') {
    switch (operadorMatematico) {
        case '+':
            let resultado = num1 + num2;
            alert(`Resultado da soma: ${resultado}`);
            break;
        case '-':
            let resultado2 = num1 - num2;
            alert(`Resultado da subtração: ${resultado2}`);
            break;
        case '*':
            let resultado3 = num1 * num2;
            alert(`Resultado da multiplicação: ${resultado3}`);
            break;
        case '/':
            if (num2 !== 0) {
                let resultado4 = num1 / num2;
                alert(`Resultado da divisão: ${resultado4}`);
            }
            else {
                alert("Não foi possível fazer a operação de divisão porque o divisor é igual a zero.");
            }
            break;
        case '%':
            if (num2 !== 0) {
                let resultado5 = num1 % num2;
                alert(`Resto da divisão: ${resultado5}`);
            }
            else {
                alert("Não foi possível fazer a operação de módulo porque o divisor é igual a zero.");
            }
            break;
        default:
            alert("Opção inválida.")
    }
}

function validandoNumeros(message) {

    while (true) {
        let numero = Number(prompt(message));
        if (isNaN(numero)) {
            alert("Entrada inválida.");
        }
        else {
            return numero;
        }
    }
}

function validandoOperador(message) {

    while (true) {
        let operador = prompt(message);

        if (operador === '+' || operador === '-' || operador === '*' || operador === '/' ||
            operador === '%') {

            return operador;
        }
        else {
            alert("Opção digitada não é válida como operador. Tente novamente.");
        }
    }
}


