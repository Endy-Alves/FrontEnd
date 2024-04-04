
function register() {
    showLoading();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(
        email, password
        ).then( () => {
            hideLoading();
            window.location.href = "../../pages/home/home.html"
        }).catch(error => {
            hideLoading();
            alert(getErrorMessage(error));
            console.log(error)
        })
}

function getErrorMessage(error) {
    if (error.code == "auth/email-already-in-use") {
        return "Email ja esta em uso";
    } if(error.code == "auth/weak-password") {
        return "Senha precisa conter no minimo 6 caracteres"
    } if (error.code == "auth/invalid-email") {
        return "Insira um email e senha"
    }
    return error.message;
}
console.log(getErrorMessage())