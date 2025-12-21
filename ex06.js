// Decisões com prompt e else if


let idade = prompt("Digite sua idade");

if (idade >= 18) {
    console.log("É maior de idade");
} else if (idade >= 16) {
    console.log("É menor de idade, mas pode votar");
} else {
    console.log("É menor de idade");
}