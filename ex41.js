const inputCodigo = document.querySelector("#codigo");
const botao = document.querySelector("#btnValidar");
const mensagem = document.querySelector("#mensagem");
const tentativasTexto = document.querySelector("#tentativas");

const codigoSalvo = "abd";
let limite = 3;
let tentativas = 0;

// Mostra o estado atual das tentativas na tela 
tentativasTexto.textContent = `Tentativas Restantes: ${limite - tentativas}`;

function validarCodigo(codigoDigitado) {
    if (codigoDigitado.trim() === "") {
        return {
            sucesso: false,
            mensagem: "código não pode ser vazio",
            ContarTentativas: false
        };
    }
    if (codigoDigitado !== codigoSalvo) {
        return {
            sucesso: false,
            mensagem: "código inválido",
            ContarTentativas: true
        };
    }
    return {
        sucesso: true,
        mensagem: "Acesso liberado",
        ContarTentativas: false
    };
}

botao.addEventListener("click", function () {

    const codigoDigitado = inputCodigo.value; 
    const resultado = validarCodigo(codigoDigitado);

    // Limpa classes anteriores
    mensagem.classList.remove("sucesso", "erro");
    mensagem.textContent = resultado.mensagem;


    if (!resultado.sucesso && resultado.ContarTentativas) {
        tentativas++;
    }

    const restantes = limite - tentativas;
    tentativasTexto.textContent = `Tentativas restantes: ${restantes}`;

    // FEEDBACK VISUAL
    if (resultado.sucesso) {
        mensagem.classList.add("sucesso");
    } else {
        mensagem.classList.add("erro");
    }
    
    if (tentativas >= limite) {
        mensagem.textContent = "Acesso bloqueado";
        mensagem.classList.remove("sucesso");
        mensagem.classList.add("erro");
        botao.disabled = true;
    }
    inputCodigo.value = "";
});