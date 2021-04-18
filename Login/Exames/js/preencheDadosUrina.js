$(document).ready(function () {
    console.log("Carregou");
    var email = sessionStorage.getItem("email");
    var encontrou = false;

    for (var dadosUsuario of dadosPessoais) {
        if (email == dadosUsuario.Email) {
            $("#nome").append(dadosUsuario.Nome);
            $("#nascimento").append(dadosUsuario.datanasc);
            dadosUsuario.Sexo == "M" ? $("#sexo").append("Masculino") : $("#sexo").append("Feminino");
            $("#rg").append(dadosUsuario.RG);
            $("#cpf").append(dadosUsuario.CPF);
            $("#telefone").append(dadosUsuario.Telefone);
            $("#endereco").append(dadosUsuario.Endereco);
        }
    }

    for (var usuario of dados) {
        if (email == usuario.Email) {
            $("#email").append(usuario.Email);
            $("#densidade").append(usuario.Densidade);
            $("#ph").append(usuario.pH);
            $("#glicose").append(usuario.Glicose);
            $("#proteina").append(usuario.Proteina);
            $("#bilirrubina").append(usuario.Bilirrubina);
            $("#urobilinogenio").append(usuario.Urobilinogênio);
            $("#hemacias").append(usuario.Hemacias);
            $("#leucocitos").append(usuario.Leucocitos);
            $("#nitrito").append(usuario.Nitrito);
            $("#cetonicos").append(usuario.Cetonicos);
            switch (usuario.Estado) {
                case "normal":
                    $("#card1").addClass("border-success");
                    $("#card2").addClass("border-success");
                    $("#card3").addClass("border-success");
                    break;
                case "anormal":
                    $("#card1").addClass("border-warning");
                    $("#card2").addClass("border-warning");
                    $("#card3").addClass("border-warning");
                    break;
                case "grave":
                    $("#card1").addClass("border-danger");
                    $("#card2").addClass("border-danger");
                    $("#card3").addClass("border-danger");
                    break;
                default:
                    console.log("Ocorreu um erro ao ler a gravidade do resultado");
            }
            encontrou = true;
        }
    }
    if(encontrou == false)alert("Não encontramos dados relacionados a este usuário");
});

$("#sair").on('click', event => {
    sessionStorage.removeItem('email');
    document.location.href = "../index.html";
});

$("#imprimir").on('click', event => {
    window.print();
});