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

function fecharModal(){
span.addEventListener("click", function(){
modal.style.display = "none";
})
}


function cliqueFora(event){
window.addEventListener("click", function(event){
if (event.target === modal){
modal.style.display = "none";
}
})
}


miniModal();
fecharModal();
cliqueFora();
