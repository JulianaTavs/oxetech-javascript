let valorCompra = Number(prompt("Informe o valor da compra: ").trim().replace(',', '.'));


let desconto = valorCompra > 100 ? valorCompra * 0.1 : valorCompra * 0.05;
let precoFinal = valorCompra - desconto;

alert(`Valor original: R$${valorCompra.toFixed(2)}
     \nDesconto aplicado: R$${desconto.toFixed(2)}
     \nValor final: R$${precoFinal.toFixed(2)}`
    );