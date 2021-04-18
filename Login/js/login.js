var usuarios = [
  {
    "Email": "josesilva@contoso.com",
    "Senha": 896541237
  },
  {
    "Email": "andrenascimento@contoso.com",
    "Senha": 5214585126
  },
  {
    "Email": "julianasouza@contoso.com",
    "Senha": 254163684
  }
];

$('#teste').on('submit', event => {
  var login = VerificaUsuario();
  if (login) {
    sessionStorage.setItem("email", $('#email').val());
    document.location.href = "Escolha/index.html";
  }
  else alert("Login ou senha incorretos");
});

function VerificaUsuario() {
  var email = $('#email').val();
  var senha = $('#senha').val();
  var retorno = false;
  for (var usuario of usuarios) {
    if (email == usuario.Email && senha == usuario.Senha) retorno = true;
  }
  return retorno;
};