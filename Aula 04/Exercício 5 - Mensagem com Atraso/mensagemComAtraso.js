function executarComAtraso(mensagem, callback) {

    setTimeout(() => {

        console.log(mensagem);

        callback();
    }, 2000);


}

function mensagemDeConfirmacao() {
    console.log("Execução efetuada. Até mais!");
}

executarComAtraso("Processando dados...", mensagemDeConfirmacao);
