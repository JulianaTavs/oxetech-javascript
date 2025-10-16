let nome = prompt("Qual é o seu nome?");

let idade = prompt("Qual é sua idade?");
idade = parseInt(idade);

let altura = prompt("Qual a sua altura?");
altura = parseFloat(altura);

let genero = prompt("Qual o seu gênero?");
genero = genero.trim().charAt(0).toUpperCase();
 

let ehEstudante = prompt("É estudante?");

if (ehEstudante == "Sim" || ehEstudante == "SIM")
{
    meuBooleano = true;
}
else 
{
    meuBooleano = false;
}

let frase = `Bem-vinda(o), ${nome} 
            \nSeu Perfil 
            \nNome: ${nome} 
            \nIdade: ${idade}
            \nAltura: ${altura}
            \nGênero: ${genero}
            \nEstudante: ${meuBooleano}`;

console.log(frase);