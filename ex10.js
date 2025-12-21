// Sistema de aprovação com validação


let nota = Number(prompt("Digite a nota do aluno de (0 a 10): "));

if (isNaN(nota)){
    alert("Favor colocar um número válido");
    console.log("Número Digitado Inválido");
} else if (nota < 0 || nota > 10){
    alert("A nota precisa estar entre 0 e 10");
    console.log("Nota fora do intervalo permitido)");
}
  else if (nota >= 7){
    console.log("aprovado");
} else if (nota >= 5 ){
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
