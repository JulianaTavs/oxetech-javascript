const senhaCorreta = "1234";
let senhaDigitada;

do
{
     senhaDigitada = prompt("Digite a senha: ").trim();

    if (senhaDigitada !== senhaCorreta)
    { 
        console.log("Senha incorreta. Tente novamente.");
    }
    else
    {
        console.log("Acesso liberado.");
    }
} while (senhaDigitada !== senhaCorreta);