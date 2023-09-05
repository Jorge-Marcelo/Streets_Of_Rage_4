let modal  = document.getElementById("myModal");
let modalImg = document.getElementById("modalImg");
let span = document.getElementById("close");
let miniaturaModal = document.querySelectorAll(".miniModal");

function abrirModal(imgSrc){
modal.style.display = "block";
modalImg.src = imgSrc;
}

function miniModal(){
miniaturaModal.forEach(miniModal => {
miniModal.addEventListener("click", function(){
abrirModal(miniModal.src)
})
}
)
}


/*Função que vai fechar o modal*/
function fecharModal(){
span.addEventListener("click", function(){
modal.style.display = "none";
})
}

/*Caso clique fora da imagem o modal será fechado*/
function cliqueFora(event){
window.addEventListener("click", function(event){
if (event.target === modal){
modal.style.display = "none";
}
})
}

/*Chamando as funções
miniatura, fecharModal 
w cliqueFora*/
miniModal();
fecharModal();
cliqueFora();
