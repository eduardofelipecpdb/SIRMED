$(document).ready(function () {
    //var email = localStorage.getItem("email");
    var email = "claudianascimento@contoso.com";
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
    document.location.href = "../index.html";
});