$(document).ready(function () {
    $('#cpf').mask('000.000.000-00', { reverse: true });
    var authMedico = localStorage.getItem("authMedico");
    if(authMedico != "true") {
        alert("Por favor, realizar Login");
        document.location.href = "../index.html";
    }

    //localStorage.setItem("dadosMedicacoes", JSON.stringify(medicacoes)); //Zera os remédios da session storage
});

$('#receituario').on('submit', event => {
    var cpf = $("#cpf").val();
    var erro = true;
    var recomendacoesStorage = JSON.parse(`${localStorage.getItem("dadosRecomendacoes")}`), recomendacoesFinal;

    recomendacoesStorage == null ? recomendacoesFinal = dadosRecomendacoes : recomendacoesFinal = recomendacoesStorage;

    var recomendacao = $("#reco").val();

    for (var recomendacoesUsuario of recomendacoesFinal) {
        if (cpf == recomendacoesUsuario.Cpf) {
            recomendacoesUsuario.Recomendacao = recomendacao;
            localStorage.setItem("dadosRecomendacoes", JSON.stringify(recomendacoesFinal));
            erro = false;
        }
    }
    alert("Recomendação cadastrada com sucesso para o cpf: " + cpf);
    document.location.href = "indexFuncionario.html";
});
$('#cancelar').on('click', event => {
    document.location.href = "indexFuncionario.html";
});
$("#sair").on('click', event => {
    localStorage.removeItem('email');
    localStorage.removeItem('authMedico');
    document.location.href = "../index.html";
});