$(document).ready(function () {
    var email = localStorage.getItem("email");
    var encontrou = false;
    var medicacoesStorage = JSON.parse(`${localStorage.getItem("dadosMedicacoes")}`), medicacoesFinal;

    medicacoesStorage == null ? medicacoesFinal = medicacoes : medicacoesFinal = medicacoesStorage;

    console.log(medicacoesStorage);

    for (var receituarioUsuario of medicacoesFinal) {
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
    localStorage.removeItem('email');
    document.location.href = "../index.html";
});