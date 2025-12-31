// Ativa o modo estrito do JavaScript (evita erros silenciosos)
"use strict";


// ======================
// CONTROLE DE TEMA
// ======================

// Seleciona o botão de troca de tema no HTML
const botaoTema = document.querySelector(".botao-tema");

// Escuta o evento de clique no botão
botaoTema.addEventListener("click", function () {

    const corpo = document.body;

    if (corpo.classList.contains("tema-claro")) {
        corpo.classList.remove("tema-claro");
        corpo.classList.add("tema-escuro");
        this.textContent = "Claro";
    } else {
        corpo.classList.remove("tema-escuro");
        corpo.classList.add("tema-claro");
        this.textContent = "Escuro";
    }

});


// ======================
// CONTROLE DE GASTOS
// ======================

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

    if (contador > 0) {
        ps[2].textContent = `Média: R$ ${(total / contador).toFixed(2)}`;
    } else {
        ps[2].textContent = `Média: R$ 0.00`;
    }
}

// Evento do botão "Adicionar Gasto"
botaoGasto.addEventListener("click", function () {

    const valor = Number(inputGasto.value);

    if (isNaN(valor) || valor <= 0) {
        return;
    }

    total += valor;
    contador++;

    atualizarResultados(total, contador);

    inputGasto.value = "";
    inputGasto.focus();

});


// ======================
// SEÇÃO DE ESTUDOS
// ======================

const estudosContainer = document.querySelector(".estudos-container");

const estudos = [
    { nome: "HTML", status: "em andamento", classe: "em-andamento" },
    { nome: "CSS", status: "em andamento", classe: "em-andamento" },
    { nome: "JavaScript", status: "em andamento", classe: "em-andamento" }
];

// Função de decisão (regra de negócio)
function proximoStatus(estudoAtual) {

    if (estudoAtual.status === "em andamento") {
        return { status: "pausado", classe: "pausado" };
    }

    if (estudoAtual.status === "pausado") {
        return { status: "concluido", classe: "concluido" };
    }

    return { status: "em andamento", classe: "em-andamento" };
}

// Função de renderização (interface)
function renderizarEstudos() {
    estudosContainer.innerHTML = "";

    estudos.forEach((estudo, index) => {

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

        item.addEventListener("click", function () {
            const novo = proximoStatus(estudos[index]);
            estudos[index].status = novo.status;
            estudos[index].classe = novo.classe;

            renderizarEstudos();
        });

        estudosContainer.appendChild(item);
    });
}

// Renderização inicial
renderizarEstudos();
