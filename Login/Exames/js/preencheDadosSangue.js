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
            $("#hemacias").append(usuario.Hemacias);
            $("#hematocrito").append(usuario.Hematocrito);
            $("#hemoglobinas").append(usuario.Hemoglobinas);
            $("#eritoblastos").append(usuario.Eritroblastos);
            $("#vcm").append(usuario.VCM);
            $("#hcm").append(usuario.HCM);
            $("#chcm").append(usuario.CHCM);
            $("#rdw").append(usuario.RDW);
            $("#leucocitos").append(usuario.Leucocitos);
            $("#mielocitos").append(usuario.Mielocitos);
            $("#monocitos").append(usuario.Monocitos);
            $("#plaquetas").append(usuario.Plaquetas);
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