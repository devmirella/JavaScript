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

    // Atualiza a mensagem principal
    mensagem.textContent = resultado.mensagem;

    // Se for erro contar tentativas
    if (!resultado.sucesso && resultado.ContarTentativas) {
        tentativas++;
    }

    const restantes = limite - tentativas;
    tentativasTexto.textContent =  `Tentativas restantes ${restantes}`;

    if (tentativas >= limite) {
        mensagem.textContent = "Acesso bloqueado";
        botao.disabled = true;
    }
    inputCodigo.value = ""
    
});