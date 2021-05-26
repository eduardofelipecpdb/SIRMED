$(document).ready(function () {
    var email = localStorage.getItem("email");
    var encontrou = false;

    for (var dadosUsuario of dadosPessoais) {
        if (email == dadosUsuario.Email) {
            $("#usuario").append(dadosUsuario.Nome);
            $("#nascer").append(dadosUsuario.datanasc);
            $("#identidade").append(dadosUsuario.RG);
            $("#identificacao").append(dadosUsuario.CPF);
            $("#numero").append(dadosUsuario.Telefone);
            $("#local").append(dadosUsuario.Endereco);
            $("#solicitar").append(dadosUsuario.Solicitante);
            $("#coleta").append(dadosUsuario.Coleta);
            $("#codigos").append(dadosUsuario.Codigos);
            encontrou = true;
        }
    }
    if(encontrou == false)alert("Não encontramos dados relacionados a este usuário");
});

$("#sair").on('click', event => {
    localStorage.removeItem('email');
    localStorage.removeItem('authMedico');
    document.location.href = "../index.html";
});