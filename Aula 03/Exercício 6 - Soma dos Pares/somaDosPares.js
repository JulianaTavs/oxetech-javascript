let numero = parseInt(prompt("Digite um número inteiro: "));
let soma = 0;

for (let i = 1; i <= numero; i++)
{
    if (i % 2 == 0)
    {
        soma += i;
    }
}

alert(`A soma dos números pares de 1 até ${numero} é: ${soma}`);