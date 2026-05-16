
document.addEventListener("DOMContentLoaded", function () {
    alert("Bem-vindo à Smart Cam!");

    var nome = prompt("Digite seu nome:");
    if (nome && nome.trim() !== "") {
        console.log("Usuário: " + nome);
    }

    var formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            var email = document.querySelector("#email");
            var senha = document.querySelector("#senha");

            if (email && senha) {
                if (email.value.trim() === "" || senha.value.trim() === "") {
                    alert("Preencha todos os campos!");
                    evento.preventDefault();
                } else {
                    alert("Login realizado com sucesso!");
                }
            }
        });
    }

    var tutorialMensagens = [
        "Bem-vindo ao tutorial da Smart Cam!",
        "Use o botão para tirar fotos.",
        "Ative configurações como modo noturno e otimização.",
        "Você concluiu o tutorial."
    ];
    var etapa = 0;

    var seguir = document.getElementById("seguir");
    if (seguir) {
        seguir.addEventListener("click", function () {
            etapa++;
            if (etapa >= tutorialMensagens.length) {
                etapa = tutorialMensagens.length - 1;
            }
            alert(tutorialMensagens[etapa]);
        });
    }

    var pular = document.getElementById("btn-pular");
    if (pular) {
        pular.addEventListener("click", function () {
            alert("Tutorial pulado.");
        });
    }

    var comecar = document.getElementById("btn-comecar");
    if (comecar) {
        comecar.addEventListener("click", function () {
            alert("Tutorial iniciado.");
        });
    }

    var themeBtn = document.getElementById("themeBtn");
    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("modo-escuro");
        });
    }

    var desativarModo = document.getElementById("desativar-modo-noturno");
    if (desativarModo) {
        desativarModo.addEventListener("click", function () {
            document.body.classList.remove("modo-escuro");
            alert("Modo noturno desativado.");
        });
    }

    var otimizar = document.getElementById("ativar-otimizacao");
    if (otimizar) {
        otimizar.addEventListener("click", function () {
            alert("Otimização ativada.");
        });
    }

    var abrirConfig = document.getElementById("abrir-config");
    var fecharConfig = document.getElementById("close-settings");
    var painel = document.querySelector(".settings-panel");

    if (abrirConfig && painel) {
        abrirConfig.addEventListener("click", function () {
            painel.style.display = "block";
        });
    }

    if (fecharConfig && painel) {
        fecharConfig.addEventListener("click", function () {
            painel.style.display = "none";
        });
    }

    var tirarFoto = document.getElementById("tirar-foto");
    if (tirarFoto) {
        tirarFoto.addEventListener("click", function () {
            var tempo = 3;
            var contador = setInterval(function () {
                console.log(tempo);
                tempo--;

                if (tempo < 0) {
                    clearInterval(contador);
                    alert("Foto capturada!");
                }
            }, 1000);
        });
    }

    var ignorar = document.getElementById("ignorar");
    if (ignorar) {
        ignorar.addEventListener("click", function () {
            alert("Ação ignorada.");
        });
    }

    var botoes = document.querySelectorAll("button, a");
    botoes.forEach(function (botao) {
        botao.addEventListener("click", function () {
            console.log("Clique detectado");
        });
    });
});
