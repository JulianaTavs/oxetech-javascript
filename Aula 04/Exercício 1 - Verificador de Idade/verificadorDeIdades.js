let resposta = confirm("Deseja verificar uma idade? ");

while (resposta) {
    let nome = prompt("Digite o nome: ");
    let idade = pedirIdade();

    if (idade === -1) {
        alert("Encerrando programa depois de 3 tentativas de entrada de idade inválidas.");
        break;
    }

    verificarIdade(nome, idade);

    let vaiEncerrar = confirm(" Deseja encerrar?");

    if (vaiEncerrar) {
        alert("Programa encerrado pelo usuário.");
        break;
    }
}


function verificarIdade(nome = "visitante", idade) {

    if (idade < 18) {
        alert(`Olá, ${nome}! Você é menor de idade.`);
    }
    else {
        alert(`Olá, ${nome}! Você é maior de idade.`)
    }
}

function pedirIdade() {

    let i = 1;
    while (i <= 3) {

        let idade = parseInt(prompt(" Digite uma idade: "));
        
        if (isNaN(idade) || idade < 0 || idade > 120) {
            alert("Idade inválida. Entre com uma idade válida.");

            if (i === 3) {
                return -1;
            }

            i++;
        }
        else {
            return idade;
        }
    }
}
