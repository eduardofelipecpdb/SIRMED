$(document).ready(function () {
    $('#cpf').mask('000.000.000-00', { reverse: true });
    var authMedico = localStorage.getItem("authMedico");
    if(authMedico != true) {
        alert("Por favor, realizar Login");
        document.location.href = "../../index.html";
    }

    //localStorage.setItem("dadosMedicacoes", JSON.stringify(medicacoes)); //Zera os remédios da session storage
});

$('#receituario').on('submit', event => {
    var cpf = $("#cpf").val();
    var erro = true;
    var recomendacoesStorage = JSON.parse(`${localStorage.getItem("dadosRecomendacoes")}`), recomendacoesFinal;

    recomendacoesStorage == null ? recomendacoesFinal = dadosRecomendacoes : recomendacoesFinal = recomendacoesStorage;
    console.log(recomendacoesFinal);

    var recomendacao = $("#reco").val();
    console.log(receituario);

    for (var recomendacoesUsuario of recomendacoesFinal) {
        if (cpf == recomendacoesUsuario.Cpf) {
            recomendacoesUsuario.Recomendacao = recomendacao;
            localStorage.setItem("dadosRecomendacoes", JSON.stringify(recomendacoesFinal));
            erro = false;
        }
    }
});
$('#cancelar').on('click', event => {
    document.location.href = "indexFuncionario.html";
});