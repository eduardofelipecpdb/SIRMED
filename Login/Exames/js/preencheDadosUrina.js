$(document).ready(function () {
    console.log("Carregou");
    //var email = sessionStorage.getItem("email");
    email = "josesilva@contoso.com";
    var encontrou = false;

    for (var usuario of dadosUrina) {
        if (email == usuario.Email) {
            $("#email").append(usuario.Email);
            $("#densidade").append(usuario.Densidade);
            $("#ph").append(usuario.pH);
            $("#glicose").append(usuario.Glicose);
            $("#proteina").append(usuario.Proteina);
            $("#bilirrubina").append(usuario.Bilirrubina);
            $("#urobilinogenio").append(usuario.Urobilinogênio);
            $("#hemaciasUrina").append(usuario.Hemacias);
            $("#leucocitosUrina").append(usuario.Leucocitos);
            $("#nitrito").append(usuario.Nitrito);
            $("#cetonicos").append(usuario.Cetonicos);
            switch (usuario.Estado) {
                case "normal":
                    $("#card7").addClass("border-success");
                    $("#card8").addClass("border-success");
                    $("#card9").addClass("border-success");
                    break;
                case "anormal":
                    $("#card7").addClass("border-warning");
                    $("#card8").addClass("border-warning");
                    $("#card9").addClass("border-warning");
                    break;
                case "grave":
                    $("#card7").addClass("border-danger");
                    $("#card8").addClass("border-danger");
                    $("#card9").addClass("border-danger");
                    break;
                default:
                    console.log("Ocorreu um erro ao ler a gravidade do resultado");
            }
            encontrou = true;
        }
    }
    if(encontrou == false)alert("Não encontramos dados relacionados a este usuário");
});
