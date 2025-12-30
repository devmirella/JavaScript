

// Ativa o modo estrito do JavaScript (evita erros silenciosos) 
"use strict";


// Seleciona o botão de troca de tema no HTML
const botaoTema = document.querySelector(".botao-tema");


// Escuta o evento de clique no botão 
botaoTema.addEventListener("click", function() {

    // Guarda o body em uma variável para facilitar a leitura
    const corpo = document.body;

    // Se o body estiver no tema claro
    if (corpo.classList.contains("tema-claro")) {

        // Remove a classe do tema claro 
        corpo.classList.remove("tema-claro");

        // Adiciona a classe do tema escuro
        corpo.classList.add("tema-escuro");

        //Muda o texto do botão 
        this.textContent = "Claro";

    // Caso contrário tema escuro
    } else {
        
        // Remove o tema escuro
        corpo.classList.remove("tema-escuro");

        // Adiciona o tema claro
        corpo.classList.add("tema-claro");

        // Atualiza o texto do botão 
        this.textContent = "Escuro";
    }

});


let total = 0;
let contador = 0;

// Seleciona elementos da seção de gastos
const inputGasto = document.querySelector(".input-gasto");
const botaoGasto = document.querySelector(".botao-gasto");
const resultadoGastos = document.querySelector(".resultado-gastos");

function atualizarResultados(total, contador) {
    const ps = document.querySelectorAll(".resultado-gastos p");

    ps[0].textContent = `Total: R$ ${total.toFixed(2)}`;
    ps[1].textContent = `Quantidade: ${contador}`;
    ps[2].textContent =  `Media: ${(total / contador).toFixed(2)};`
}


// Evento do botão "Adicionar Gasto"
botaoGasto.addEventListener("click", function() {

    const valor = Number(inputGasto.value);

    // validações
    if (isNaN(valor) || valor <= 0) {
        alert("Digite um valor válido");
        return;

    } 
    

    // Atualiza os dados 
    total += valor
    contador ++;

    atualizarResultados(total, contador);

    // Limpa o campo
    inputGasto.value="";
    inputGasto.focus();


});

const estudosContainer = document.querySelector(".estudos-container");
const estudos = [
    {nome: "HTML", status: "em andamento", classe: "em-andamento"},
    {nome: "CSS", status: "em andamento", classe: "em-andamento"},
    {nome: "JavaScript", status: "em andamento", classe: "pausado"}

];

function renderizarEstudos() {
    estudosContainer.innerHTML="";

    estudos.forEach(estudo => {

        const item = document.createElement("div");
        item.classList.add("estudo-item");

        const nome = document.createElement("p");
        nome.classList.add("estudo-nome");
        nome.textContent = estudo.nome;

        const status = document.createElement("p");
        status.classList.add("estudo-status", estudo.classe);
        status.textContent = estudo.status;

        item.appendChild(nome);
        item.appendChild(status);

        estudosContainer.appendChild(item);

        
    });
}

renderizarEstudos();
    