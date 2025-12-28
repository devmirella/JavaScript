
// Verificação de idade



let idade = Number(prompt("Informe a sua idade: "))

if (isNaN(idade)) {
    alert("Por favor, digite um número:");
    console.log("Número inválido");

} else if (idade >= 18) {
    alert("É maior de idade.")
    console.log("É maior de idade", idade)
} else {
    alert("É menor de idade.");
    console.log("É menor de idade: ", idade);
}