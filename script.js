
// ======================================
// FUNCIONALIDADE 1 - ALTERNAR TEMA
// ======================================

const botaoTema = document.getElementById("alternar-tema");

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("tema-claro");

    if (document.body.classList.contains("tema-claro")) {

        botaoTema.textContent = "🌙 Ativar tema escuro";

    } else {

        botaoTema.textContent = "☀️ Ativar tema claro";

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
    if (email === "" || !email.includes("@") || !email.includes(".")) {
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
