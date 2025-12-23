// Loop while com saída controlada


let soma = 0;
let numero; 

while (true){
    numero = Number(prompt("Digite um número (0 para sair):"));

    if (isNaN(numero)){
        alert("Erro, favor digitar um número: ");
        continue;
    }

    if (numero === 0){
        break; 
    }

    soma += numero
}   

alert("A soma dos números digitados são " + soma)
console.log("A soma dos números digitados são ", soma)


