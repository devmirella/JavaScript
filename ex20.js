// Sistema de notas

soma = 0;

while (true) {
    let nota = Number(prompt("Informe a nota ou digite 0 para encerrar:"));

    if (isNaN(nota)) {
        alert("Número inválido")
        continue;

    } else if (nota === 0) {
        break;
    }

    soma += nota;
}

if (soma >= 80) {
    alert("Aprovado");
    console.log("Nota: ", soma);

} else if (soma >= 60) {
    alert("Recuperação");
    console.log("Nota: ", soma);

} else {
    alert("Reprovado");
    console.log("Nota: ", soma);
}