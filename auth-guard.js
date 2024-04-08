// O guarda, usado para impedir que um usuario nao logado  acesse a pagina home do site
firebase.auth().onAuthStateChanged(user => {
    if(!user){
        window.location.href = "../../index.html"
    }
}) 