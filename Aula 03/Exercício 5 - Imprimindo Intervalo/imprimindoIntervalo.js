let valorInicial = parseInt(prompt("Digite um valor inicial(inteiro): "));
let valorFinal = parseInt(prompt("Digite um valor final(inteiro): "));
let resultado = " ";

for (let i = valorInicial; i <= valorFinal; i++)
{
    resultado += i + " "; 
}

console.log(resultado.trim());