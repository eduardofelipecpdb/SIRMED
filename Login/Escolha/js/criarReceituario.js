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
    var medicacoesStorage = JSON.parse(`${localStorage.getItem("dadosMedicacoes")}`), medicacoesFinal;

    medicacoesStorage == null ? medicacoesFinal = medicacoes : medicacoesFinal = medicacoesStorage;
    console.log(medicacoesFinal);

    var receituario = {
        Nome: $("#nome").val(),
        Quantidade: $("#qtd").val(),
        Periodicidade: $("#period").val(),
        Uso: $("#uso").val()
    };
    console.log(receituario);

    for (var receituarioUsuario of medicacoesFinal) {
        if (cpf == receituarioUsuario.Cpf) {
            console.log(receituarioUsuario.Remedios);
            receituarioUsuario.Remedios.push(receituario);
            localStorage.setItem("dadosMedicacoes", JSON.stringify(medicacoesFinal));
            erro = false;
        }
    }
    alert("Prescrição cadastrada com sucesso para o cpf: " + cpf);
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