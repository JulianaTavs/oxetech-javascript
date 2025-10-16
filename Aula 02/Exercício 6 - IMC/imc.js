let nome = prompt("Digite seu nome: ");
let peso = Number(prompt("Digite seu peso(em kg): "));
let altura = Number(prompt("Digite sua altura(em metros): "));

let imc = peso / (altura * altura);

let confirmacao = confirm(`Seus dados estão corretos?\nNome: ${nome}\nPeso: ${peso}kg\nAltura: ${altura}m\nDeseja continuar?`);

confirmacao ? alert(`${nome}, seu IMC é ${imc.toFixed(2)}`) : alert("Você saiu do programa.");