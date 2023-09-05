/*
Autor: Jorge Marcelo
Data de Criação: 05/09/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 


/*Selecionando elementos pelo DOM*/
let modal  = document.getElementById("myModal");
let modalImg = document.getElementById("modalImg");
let span = document.getElementById("close");
let miniaturaModal = document.querySelectorAll(".miniModal");


/*Função que vai pegar as imagens e abrir o modal*/ 
function abrirModal(imgSrc){
modal.style.display = "block";
modalImg.src = imgSrc;
}

/*Função que vai pegar as minitaturas para abrir o modal*/
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

/*Função que vai fechar o modal caso haja um clique fora*/
function cliqueFora(event){
window.addEventListener("click", function(event){
if (event.target === modal){
modal.style.display = "none";
}
})
}

/*Chamando as funções*/
miniModal();
fecharModal();
cliqueFora();
