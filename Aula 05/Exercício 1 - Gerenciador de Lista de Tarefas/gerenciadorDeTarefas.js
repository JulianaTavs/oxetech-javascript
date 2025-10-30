const tarefas = ["Estudar JavaScript", "Treinar na academia", "Ler um capítulo de livro"];
let acaoEscolhida = validarAcaoEscolhida();
let novoElemento;

function validarAcaoEscolhida() {
    while (true) {
        let acao = prompt("Qual das ações você gostaria de escolher?\n1 - adicionarInicio\n2 - adicionarFim\n3 - removerInicio\n4 - removerFim");

        if (!acao || acao === "") {
            console.log("ERRO: O campo de ação está vazio!")
        } else {
            if (acao === "adicionarInicio" || acao === "adicionarFim" ||
                acao === "removerInicio" || acao === "removerFim") {
                return acao;
            } else {
                console.log("ERRO: Opção inválida digitada.");
            }
        }
    }
}

/**
 * Gerencia a lista de tarefas com base na ação escolhida.
 *
 * @param {string[]} array O array de tarefas.
 * @param {string} acaoEscolhida A ação a ser executada ("adicionarInicio", etc.).
 * @param {string} [novoElemento] O elemento a ser adicionado (opcional).
 */
function gerenciarTarefas(array, acaoEscolhida, novoElemento) {

    switch (acaoEscolhida) {
        case "adicionarInicio":
            if (novoElemento && novoElemento.trim() !== "") {
                array.unshift(novoElemento);
                console.log (`Tarefa '${novoElemento}' adicionada no início do array.`);
            } else {
                console.log("ERRO: O campo de tarefa está vazio!");
            }
            break;
        case "adicionarFim":
            if (novoElemento && novoElemento.trim() !== "") {
                array.push(novoElemento);
                console.log (`Tarefa '${novoElemento}' adicionada no final do array.`);
            } else {
                console.log("ERRO: O campo de tarefa está vazio!");
            }
            break;
        case "removerInicio":
            if (array.length > 0) {

                const removida = array.shift();
                console.log (`Tarefa '${removida}' removida do início do array.`);

            } else {
                console.log("ERRO: O array está vazio! Nada a remover.");
            }
            break;
        case "removerFim":
            if (array.length > 0) {

                const removida = array.pop();
                console.log(`Tarefa '${removida}' removida do fim do array.`);

            } else {
                console.log("ERRO: O array está vazio! Nada a remover.");
            }
            break;
        default:
            console.log("Ação não encontrada!");
            break;
    }
}

gerenciarTarefas(tarefas, acaoEscolhida, "Dormir");

console.log(tarefas);
