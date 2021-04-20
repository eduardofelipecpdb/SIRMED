$(document).ready(function () {
    console.log("Carregou");
   // var email = sessionStorage.getItem("email");
    var email = "andrenascimento@contoso.com";
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
        }
    }  
});

$("#sair").on('click', event => {
    sessionStorage.removeItem('email');
    document.location.href = "../index.html";
});

$("#imprimir").on('click', event => {
    window.print();
});