while (true) {
  let preco = validarNumero("Digite o preço do produto: ");
  let porcentagemDesconto = validarInteiro("Digite a porcentagem de desconto(Ex: 10): ");

  const calcularDesconto = (preco, porcentagemDesconto) => {
    let valorFinal = preco - preco * (porcentagemDesconto / 100);
    return valorFinal;
  }

  alert("Valor final: R$" + calcularDesconto(preco, porcentagemDesconto).toFixed(2));

  let continuar = confirm("Deseja calcular o desconto de outro produto? (sim(ok)/não(cancelar))");
  if (!continuar) {
    alert("Encerrando aplicação...")
    break;
  }
}


function validarNumero(message) {
  while (true) {

    let preco = prompt(message);

    if (preco === "") {
      alert("É necessário digitar um valor.");
    }
    else {
      let precoConvertido = Number(preco);
      if (isNaN(precoConvertido) || precoConvertido <= 0) {
        alert("Preço inválido. Digite um valor maior que zero.");
      }
      else {
        return precoConvertido;
      }
    }
  }
}

function validarInteiro(message) {
  while (true) {
    let porcentagemDesconto = prompt(message);
    console.log(porcentagemDesconto);

    if (porcentagemDesconto === "") {
      alert("É necessário digitar um valor.");
    }
    else {
      if (!porcentagemDesconto.includes('.') && !porcentagemDesconto.includes(',')) {
        let valorConvertido = parseInt(porcentagemDesconto.trim());
        if (Number.isInteger(valorConvertido)) {
          return valorConvertido;
        }
      }
      else {
        alert("Valor inválido. Favor digitar um número inteiro para a aplicação do desconto.");
      }
    }
  }
}