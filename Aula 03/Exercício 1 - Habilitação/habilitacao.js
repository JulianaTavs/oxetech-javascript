let anoNascimento = parseInt(prompt("Digite o ano de nascimento(YYYY): (Ex: 2000)"));
let anoAtual = parseInt(prompt("Digite o ano atual(YYYY): (Ex: 2025)"));
let idadeAnoCorrente = anoAtual - anoNascimento;

if (idadeAnoCorrente >= 18)
{
    console.log(alert(`Você completa ${idadeAnoCorrente} anos em ${anoAtual} e poderá tirar a habilitação.`));
}
else
{
    console.log(alert(`Você completa ${idadeAnoCorrente} anos em ${anoAtual} e ainda não poderá tirar a habilitação.`));
}
