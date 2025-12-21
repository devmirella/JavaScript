// Decisões com operadores lógicos


let idade = Number(prompt("Digite sua idade: "));
let temtitulo = prompt("Você possui titulo de eleitor? ").toLocaleLowerCase();

if  (isNaN(idade)){
    alert("Por favor, Digite uma idade válida");
    console.log("Número Digitado inválido");
} else if (idade >= 16 && temtitulo === "sim"){
    console.log("Você pode votar");
} else {
    console.log("Você não pode votar");
}