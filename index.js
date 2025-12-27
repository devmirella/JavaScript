

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