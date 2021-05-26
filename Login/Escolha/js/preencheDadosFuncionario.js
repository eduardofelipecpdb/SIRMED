$(document).ready(function () {
    var authMedico = localStorage.getItem("authMedico");
    //alert(authMedico);
    if(authMedico != "true") {
        alert("Por favor realizar Login");
        document.location.href = "../index.html";
    }
    var email = localStorage.getItem("email");
    var encontrou = false;

    for (var dadosUsuario of dadosPessoais) {
        if (email == dadosUsuario.Email) {
            $("#usuario").append(dadosUsuario.Nome);
            $("#nascer").append(dadosUsuario.datanasc);
            $("#crm").append(dadosUsuario.CRM);
            $("#identificacao").append(dadosUsuario.CPF);
            $("#numero").append(dadosUsuario.Telefone);
            $("#local").append(dadosUsuario.Endereco);
            $("#unidade").append(dadosUsuario.Unidade);
            $("#divisao").append(dadosUsuario.Divisao);
            $("#cargo").append(dadosUsuario.Cargo);
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