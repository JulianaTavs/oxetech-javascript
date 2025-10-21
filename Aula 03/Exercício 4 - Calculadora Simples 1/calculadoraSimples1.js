let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

alert("--- Operações ---\n1 - soma\n2 - subtração\n3 - multiplicação\n4 - divisão\n-----------------");

let operacao = Number(prompt("Escolha uma operação: "));

switch (operacao) {
    case 1:
        alert(`Resultado da soma: ${num1 + num2}`);
        break;
    case 2:
        alert(`Resultado da subtração: ${num1 - num2}`);
        break;
    case 3:
        alert(`Resultado da multiplicação: ${num1 * num2}`);
        break;
    case 4:
        alert(`Resultado da divisão: ${num1 / num2}`);
        break;
    default:
        alert("Escolha uma opção válida(1-4).");
}







