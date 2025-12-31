// Funções



function calcularMedia(soma, contador) {
    let media = soma / contador;
    return media;
}

soma = 20;
contador = 4;

let resultado = calcularMedia(soma, contador);
console.log("media: ", resultado);