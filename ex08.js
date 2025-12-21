// Validação de entrada com isNaN


let idade = Number(prompt("Digite a sua idade"));
if(isNaN(idade)) {
    alert("Por favor, digite um número válido: ");
    console.log("Valor Digitado Inválido");
} else if (idade >= 18){
    console.log("Você é maior de idade");
} else if (idade >= 16){
    console.log("Você não é maior de idade, mas pode votar ");
} else {
    console.log("Você é menor de idade.");
}