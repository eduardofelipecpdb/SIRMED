var usuarios = [
  {
    "Email": "josesilva@contoso.com",
    "Senha": 896541237,
    "Medico": false
  },
  {
    "Email": "andrenascimento@contoso.com",
    "Senha": 5214585126,
    "Medico": false
  },
  {
    "Email": "julianasouza@contoso.com",
    "Senha": 254163684,
    "Medico": false
  },
  {
    "Email": "claudianascimento@contoso.com",
    "Senha": 4563214745,
    "Medico": true
  }
];

$('#teste').on('submit', event => {
  var login = VerificaUsuario();
  var isMedico = VerificaUsuarioMedico();
  if (login) {
    localStorage.setItem("email", $('#email').val());
    if(isMedico)
    {
      localStorage.setItem("authMedico", true);
      document.location.href = "Escolha/indexFuncionario.html";
    }
    else
    {
      document.location.href = "Escolha/index.html";
    }
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

function VerificaUsuarioMedico() {
  var email = $('#email').val();
  var retorno = false;
  for (var usuario of usuarios) {
    if (email == usuario.Email) retorno = usuario.Medico;
  }
  return retorno;
}
