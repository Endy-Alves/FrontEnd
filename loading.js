// Função de carregamento, toda vez que houver um carregamento (ou uma espera de confirmação por parte do firebase) eu chamo essa função que criara uma pagina de carregamento

function showLoading(){
    const div = document.createElement("div");
    div.classList.add("loading")

    const label = document.createElement("label");
    label.innerText = "Carregando...";

    div.appendChild(label);

    document.body.appendChild(div)

}

//função de esconder a tela de carregamento, usado as condições opostas de "showLoading"
function hideLoading(){
    const loadings = document.getElementsByClassName("loading");
    if (loadings.length){
        loadings[0].remove();
    }
}