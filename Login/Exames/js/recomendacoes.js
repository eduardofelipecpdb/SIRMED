$(document).ready(function () {
    var email = "josesilva@contoso.com";//localStorage.getItem("email");
    var encontrou = false;
    var recomendacoesStorage = JSON.parse(`${localStorage.getItem("dadosRecomendacoes")}`), recomendacoesFinal;

    recomendacoesStorage == null ? recomendacoesFinal = dadosRecomendacoes : recomendacoesFinal = recomendacoesStorage;

    for (var usuario of recomendacoesFinal) {
        if (email == usuario.Email) {
            $("#recomendacoes").append(usuario.Recomendacao);
            encontrou = true;
        }
        
    }
    if (encontrou == false) alert("Não encontramos dados relacionados a este usuário");
});

$("#sair").on('click', event => {
    localStorage.removeItem('email');
    document.location.href = "../index.html";
});