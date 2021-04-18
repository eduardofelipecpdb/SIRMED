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
            $("#hemograma").append(usuario.Hemograma);
            $("#glicemia").append(usuario.Glicemia);
            $("#colesterol").append(usuario.Colesterol);
            $("#triglicerideos").append(usuario.Triglicerideos);
            $("#ureia").append(usuario.Ureia);
            $("#creatina").append(usuario.Creatina);
            $("#tgo").append(usuario.tgo);
            $("#tgp").append(usuario.tgp);
            $("#tsh").append(usuario.TSH);
            $("#t4").append(usuario.t4);
            $("#acido").append(usuario.acido);
            $("#eletrocardiograma").append(usuario.Eletrocardiograma);
            $("#ergometrico").append(usuario.ergometrico);
            $("#ecocardiograma").append(usuario.Ecocardiograma);
            switch (usuario.Estado) {
                case "normal":
                    $("#eritograma1").addClass("border-success");
                    $("#eritograma2").addClass("border-success");
                    $("#leucograma").addClass("border-success");
                    break;
                case "anormal":
                    $("#eritograma1").addClass("border-warning");
                    $("#eritograma2").addClass("border-warning");
                    $("#leucograma").addClass("border-warning");
                    break;
                case "grave":
                    $("#eritograma1").addClass("border-danger");
                    $("#eritograma2").addClass("border-danger");
                    $("#leucograma").addClass("border-danger");
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