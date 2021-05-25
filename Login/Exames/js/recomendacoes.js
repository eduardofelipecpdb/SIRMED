$(document).ready(function () {
    var email = localStorage.getItem("email");
    var encontrou = false;


    for (var usuario of dadosRecomendacoes) {
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