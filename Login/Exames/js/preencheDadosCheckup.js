$(document).ready(function () {
    var email = localStorage.getItem("email");
    var encontrou = false;


    for (var usuario of dadosCheckup) {
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
    localStorage.removeItem('email');
    document.location.href = "../index.html";
});