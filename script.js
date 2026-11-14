
// ======================================
// FUNCIONALIDADE 1 - ALTERNAR TEMA
// ======================================

const botaoTema = document.getElementById("alternar-tema");

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("tema-claro");

    const temaClaro = document.body.classList.contains("tema-claro");

    if (temaClaro) {

        botaoTema.textContent = "🌙 Ativar tema escuro";
        botaoTema.setAttribute("aria-pressed", "true");

    } else {

        botaoTema.textContent = "☀️ Ativar tema claro";
        botaoTema.setAttribute("aria-pressed", "false");

    }

});


// ======================================
// FUNCIONALIDADE 2 - VALIDAR FORMULÁRIO
// ======================================

const formulario = document.getElementById("form-contato");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Capturando os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verificando o nome
    if (nome === "") {

        alert("Por favor, digite seu nome!");
        return;

    }

    // Verificando o e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {

        alert("Digite um e-mail válido!");
        return;

    }

    // Verificando a mensagem
    if (mensagem === "") {

        alert("Por favor, escreva uma mensagem!");
        return;

    }

    // Exibindo confirmação
    alert(
        "Mensagem enviada com sucesso!\n\n" +
        "Nome: " + nome + "\n" +
        "E-mail: " + email + "\n" +
        "Telefone: " + (telefone || "Não informado")
    );

    // Limpando os campos
    formulario.reset();

});


// ======================================
// FUNCIONALIDADE 3 - MENU HAMBÚRGUER
// ======================================

// Capturando o menu
const conteudoMenu = document.getElementById("conteudoMenu");

// Capturando os links
const linksMenu = document.querySelectorAll(
    "#conteudoMenu .nav-link"
);

// Fechar o menu ao selecionar uma opção
linksMenu.forEach(function(link) {

    link.addEventListener("click", function() {

        if (window.innerWidth < 992) {

            const menuBootstrap =
                bootstrap.Collapse.getOrCreateInstance(conteudoMenu);

            menuBootstrap.hide();

        }

    });

});
