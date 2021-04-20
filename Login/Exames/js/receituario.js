$(document).ready(function () {
    var email = sessionStorage.getItem("email");
    var encontrou = false;
    for (var receituarioUsuario of medicacoes) {
        if (email == receituarioUsuario.Email) {
            for (var medicamento of receituarioUsuario.Remedios){
                var linha = "<li class='list-group-item d-flex justify-content-between align-items-start'><div class='ms-2 me-auto'>";
                linha += "&emsp;<h4>Nome: "+medicamento.Nome+"</h4>";
                linha += "<p>Quantidade: "+medicamento.Quantidade+"</p>";
                linha += "<p>Periodicidade: "+medicamento.Periodicidade+"</p>";
                linha += "<p>Uso: "+medicamento.Uso+"</p></div></li>";
                $("#listaMedicacoes").append(linha);
                encontrou = true;
            }
        }
    }
    if(encontrou == false)alert("Não encontramos dados relacionados a este usuário");
});

$("#sair").on('click', event => {
    sessionStorage.removeItem('email');
    document.location.href = "../index.html";
});