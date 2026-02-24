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

botao.addEventListener("click", function() {

    const codigoDigitado = inputCodigo.value;

    const resultado = validarCodigo(codigoDigitado);

    // Atualiza a mensagem principal
    if (!resultado.sucesso) {

        if (resultado.ContarTentativas) {
            tentativas++;
        }
        const restantes = limite - tentativas;
        tentativasTexto.textContent = `Tentativas restantes: ${restantes}`;

        if (tentativas >= limite) {
            mensagem.textContent = "Tentativas esgotadas";
            botao.disabled = true;
        } else {
            mensagem.textContent = resultado.mensagem;
        }
            
        inputCodigo.value = "";
        return;
    } 
    mensagem.textContent = resultado.mensagem;
    inputCodigo.value = "";
    
});