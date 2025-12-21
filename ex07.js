// Conversão de dados com Number()


let idade = Number(prompt("Digite sua idade: "))

if (idade >= 18) {
    console.log("Você é maior de idade");
} else if (idade >= 16) {
    console.log("Você não é maior de idade, mas pode votar");
} else {
    console.log("Você é menor de idade ");
}
