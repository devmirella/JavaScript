const limiteTentativas = 3;
const senhaSalva = "ABCDS1234";
let tentativasUsadas = 0;


const inputSenha = document.querySelector("#senha");
const botao = document.querySelector("#btnValidar");
const mensagem = document.querySelector("#mensagem");
const tentativas = document.querySelector("#tentativas");

function validarSenha(senhaDigitada) {

    const senhaMinima = 6;

    if (senhaDigitada.length < senhaMinima) {
        return {
            sucesso: false,
            mensagem: "A senha deve ter pelo menos 6 caracteres.",
            contarTentativas: true
        };
    }
    if (!/\d/.test(senhaDigitada)) {
        return {
            sucesso: false,
            mensagem: "A senha precisa conter pelo menos um número.",
            contarTentativas: true
        };

    }
    return {
        sucesso: true,
        mensagem: "Senha válida.",
        contarTentativas: false
    };

}

botao.addEventListener("click", () => {

    mensagem.classList.remove("sucesso", "erro");

    const resultado = validarSenha(inputSenha.value);
    mensagem.textContent = resultado.mensagem;

    if (resultado.sucesso) {
        mensagem.classList.add("sucesso");
        inputSenha.value = "";
        return;
    } 
    if (resultado.contarTentativas) {
        tentativasUsadas++;
    }
    const restantes = limiteTentativas - tentativasUsadas;
    tentativas.textContent = `Tentativas restantes ${restantes}`;

    if (tentativasUsadas >= limiteTentativas) {
        mensagem.textContent = "Acesso bloqueado";
        botao.disabled = true;
    }
    inputSenha.value = "";

});

