// Validação com while


let nota = Number(prompt("Digite a nota do aluno de (0 a 10)"));
while (isNaN(nota) || nota < 0 || nota > 10){
    alert("Nota Inválida. Digite um número entre 0 a 10");
    nota = Number(prompt("Digite a nota do aluno de (0 a 10):"));
} 
if (nota >= 7){
    console.log("Aprovado");
} else if (nota >= 5){
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}