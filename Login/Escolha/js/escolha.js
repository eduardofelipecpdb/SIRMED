$("#sair").on('click', event => {
    localStorage.removeItem('email');
    document.location.href = "../../index.html";
});