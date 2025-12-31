// Repetição com while (Idade válida)


let idade = Number(prompt("Informe sua idade (0 a 120): "));

while (isNaN(idade)|| idade < 0 || idade > 120){
    alert("Idade Inválida");
    idade = Number(prompt("Informe sua idade (0 a 120): "));
} 

if (idade >= 18){
    console.log("Maior de Idade ");
} else {
    console.log("Menor de Idade ");
}