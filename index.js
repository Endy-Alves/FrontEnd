firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.href = "pages/home/home.html";
  }
})


function login(){
  showLoading()
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

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

function getErrorMessage(error){
  if (error.code == "auth/invalid-email") {
    return "Usuario nao encontrado";
  }
  return error.message;
}

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

