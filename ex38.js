const inputEmail = document.querySelector("#email");
const inputSenha = document.querySelector("#senha");
const botao = document.querySelector("#btnLogin");
const mensagem = document.querySelector("#mensagem");

let tentativas = 0;
let limite = 3;

const emailCorreto = "admin@email.com";
const senhaCorreta = "1234";

function validar(emailDigitado, senhaDigitada) {

    if (emailDigitado.trim() === "" || senhaDigitada.trim() === "") {
        return {
            sucesso: false,
            mensagem: "Email e senha são obrigatórios",
            contarTentativas: false
        };
    } 
    if (emailDigitado !== emailCorreto || senhaDigitada !== senhaCorreta) {
        return {
            sucesso: false,
            mensagem: "Email ou senha inválidos",
            contarTentativas: true
        };  
    }
    return {
        sucesso: true,
        mensagem: "Login realizado com sucesso",
        contarTentativas: false
    };
}

botao.addEventListener("click", function(){

    // Pega valores digitados
    const emailDigitado = inputEmail.value;
    const senhaDigitada = inputSenha.value;

    const resultado = validar(emailDigitado, senhaDigitada);

    if (!resultado.sucesso) {

        if (resultado.contarTentativas) {
            tentativas++;
        

                if (tentativas >= limite) {
                    mensagem.textContent = "Número máximo de tentativas atingido.  Acesso bloqueado.";
                    botao.disabled = true;
                } else {
                    mensagem.textContent = resultado.mensagem + ",  Restam  " + (limite - tentativas) + "  tentativas.";   
                }   
        } else {
            mensagem.textContent = resultado.mensagem
        }
        inputEmail.value = "";
        inputSenha.value = "";
        return;
    }
    mensagem.textContent = resultado.mensagem;
    inputEmail.value = "";
    inputSenha.value = "";

});