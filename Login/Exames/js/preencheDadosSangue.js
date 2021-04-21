$(document).ready(function () {
    var email = sessionStorage.getItem("email");
    var encontrou = false;


    for (var usuario of dadosSangue) {
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
                    $("#card4").addClass("border-success");
                    $("#card5").addClass("border-success");
                    $("#card6").addClass("border-success");
                    break;
                case "anormal":
                    $("#card4").addClass("border-warning");
                    $("#card5").addClass("border-warning");
                    $("#card6").addClass("border-warning");
                    break;
                case "grave":
                    $("#card4").addClass("border-danger");
                    $("#card5").addClass("border-danger");
                    $("#card6").addClass("border-danger");
                    break;
                default:
                    console.log("Ocorreu um erro ao ler a gravidade do resultado");
            }
            encontrou = true;
        }
    }
    if (encontrou == false) alert("Não encontramos dados relacionados a este usuário");
});
