// Usando o firebase para capturar a mudança de usuario na pagina e redirecionar para a pagina "home"
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.href = "pages/home/home.html";
  }
})

// botão de login, caso os campos de email(username) e password estejam preenchidos corretamente, vai redirecionar para a pagina "home"
function login(){
  showLoading()
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // usando o firebase para entrar com o email e a senha
  firebase.auth().signInWithEmailAndPassword(username, password).then(response => {
    hideLoading()
    window.location.href = "./pages/home/home.html"
  }).catch(error => {
    hideLoading()
    alert(getErrorMessage(error))
    console.log('error', error)
  });}

function register(){
   window.location.href = "./pages/register/register.html"
}

function recoverPassword(){
  showLoading()
  const username = document.getElementById('username').value;

  firebase.auth().sendPasswordResetEmail(username).then(() => {
    hideLoading()
    alert('Email enviado com sucesso')
  }).catch(error => {
    hideLoading()
    alert(getErrorMessage(error))
  })
}

// função de mudança de mensagem de erro, pega o erro e transforma a mensagem de erro padrão do alert em uma mensagem que eu criei
function getErrorMessage(error){
  if (error.code == "auth/invalid-email") {
    return "Usuario não encontrado";
  }if(error.code == "auth/invalid-credential") {
    return "Usuario ou senha invalidos"
  }
  return error.message;
}

// função para validar os campos de login, se os campos estiverem preenchidos sera efetuado o login
function validateEmailPassword(){
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if(username, password){
    return login()
  }else{
    return console.log("Campos Vazios")
  }
}
console.log(validateEmailPassword())

