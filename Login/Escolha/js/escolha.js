$("#sair").on('click', event => {
    localStorage.removeItem('email');
    localStorage.removeItem('authMedico');
    document.location.href = "../../index.html";
});