// Contador + média

let soma = 0;
let contador = 0;
let numero;


while(true){
    numero = Number(prompt(" Digite um número (0 para sair): "));

    if (isNaN(numero)){
        alert("Erro, favor digitar um número: ");
        continue;
    }

    if (numero === 0){
        break;
    }

    soma += numero;
    contador ++;
}


if (contador > 0) {
    let media = soma / contador;
    alert(
        "             Resultado:\n" +
        "Quantidade de números:  " + contador + "\n" +
        "Soma:  " + soma + "\n" +
        "Media:  " + media
    );

console.log("Quantidade: ", contador);
console.log("Soma: ", soma);
console.log("Media: ", media);

} else{
    alert("Nenhum número válido foi digitado. ");
}
