let nome = prompt("Digite seu nome: ");
const dataAtual = new Date();
const hora = dataAtual.getHours();

const mensagemDeBoasVindas = function (nomeInformado, horaInformada) {
    let mensagem;

    if (horaInformada >= 6 && horaInformada <= 11) {
        mensagem = `Bom dia, ${nomeInformado}!`;

    } else if (horaInformada <= 17) {
        mensagem = `Boa tarde, ${nomeInformado}!`;

    }
    else if (horaInformada <= 23) {
        mensagem = `Boa noite, ${nomeInformado}!`;

    }
    else {
        mensagem = `Olá, ${nomeInformado}!`;
    }
    return mensagem;
}

console.log(mensagemDeBoasVindas(nome, hora));




