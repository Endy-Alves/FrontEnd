// função de logout, sair com o usuario, para que possa retornar a pagina de login e registro
function logout() {
    showLoading()
    firebase.auth().signOut().then(() => {
        hideLoading()
        window.location.href = "../../index.html"
    }).catch(() => {
        alert('Erro ao fazer logout')
    })
}