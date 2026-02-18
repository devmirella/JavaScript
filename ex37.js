const inputcodigo = document.querySelector("#codigo");
const botao = document.querySelector("#btnValidar");
const mensagem = document.querySelector("#mensagem");

let tentativas = 0;
let limite = 3;
const codigoSalvo = "ABC";

function validar(codigoDigitado) {
    if (codigoDigitado.trim() === "") {
        return {
            sucesso:false,
            mensagem:"codigo não pode ser vazzio",
            contarTentativas: false
        };
    } 
    if (codigoDigitado !== codigoSalvo) {
        return {
            sucesso: false,
            mensagem: "codigo inválido",
            contarTentativas: true
        };  
    }
    return {
        sucesso: true,
        mensagem: "código válido",
        contarTentativas: false
    };
}

botao.addEventListener("click", function() {
    const codigoDigitado = inputcodigo.value;
    const resultado = validar(codigoDigitado);

    if (!resultado.sucesso) {

        if (resultado.contarTentativas) {
            tentativas++;
            mensagem.textContent = resultado.mensagem;

            if (tentativas === limite) {
                mensagem.textContent = "Números de tentativas esgotadas. Acesso bloqueado";
                botao.disabled = true;

            } else {
                mensagem.textContent = resultado.mensagem + ",  Restam  " + (limite - tentativas) + "  tentativas."
            }
        } else { // Caso o erro não conte tentativa (campo vazio), apenas mostre a mensagem retornada pela função
            mensagem.textContent = resultado.mensagem;
        }
        inputcodigo.value = "";
        return;

    } 
    mensagem.textContent = resultado.mensagem;
    inputcodigo.value = "";

});