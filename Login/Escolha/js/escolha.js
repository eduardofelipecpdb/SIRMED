$("#sair").on('click', event => {
    sessionStorage.removeItem('email');
    document.location.href = "../../index.html";
});