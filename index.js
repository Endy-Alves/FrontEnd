
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

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9ZIP5UmN53lVysddRhn22rYAC5Z3vDlM",
  authDomain: "controle-de-gastos-10fbb.firebaseapp.com",
  projectId: "controle-de-gastos-10fbb",
  storageBucket: "controle-de-gastos-10fbb.appspot.com",
  messagingSenderId: "914622999963",
  appId: "1:914622999963:web:75f9ef04c7563d2b60053e"
};
firebase.initializeApp(firebaseConfig);
