// Exibindo apenas maiores de idade


let idade = [16, 18, 24, 12, 41, 7];

for (let i = 0; i < idade.length; i++) {
    if (idade[i] >= 18) {
        console.log("Maior de idade: ", idade[i]);
    }
}