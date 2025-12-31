// Controle simples de gastos



let soma = 0;
let contador = 0;

while (true) {
    let gastos = Number(prompt("Informe o valor dos gastos e 0 para sair"));

    if (isNaN(gastos)) {
        alert("Erro, número inválido");  
        continue;

    } else if (gastos === 0) {
        break;

    } else if (gastos < 0){
        alert(" valor do gasto não pode ser negativo ");
        continue;
    }

    soma += gastos;
    contador ++;
}
if (contador === 0) {
    console.log("Nenhum gasto foi informado");
} else {
    let gastoMedio = soma / contador;
    


console.log("Soma total dos gastos: ", soma);
console.log("Gastos informados: ", contador);
console.log("Gastos médio: ", gastoMedio);
}