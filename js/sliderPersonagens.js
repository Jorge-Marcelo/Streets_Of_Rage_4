/*
Autor: Jorge Marcelo
Data de Criação: 05/09/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/

/*Inicializando a variavel do indice do slider*/
let indiceSlides = 1;
mostrarSlides(indiceSlides);

/*Função responsavel pelos botões de controle*/
function controles(numero){
mostrarSlides(indiceSlides = indiceSlides + numero);
}

/*Função que mostra a imagem atual do slider*/
function imagemAtual(numero){
mostrarSlides(indiceSlides = numero)
}

function mostrarSlides(numero){

/*Contador que vai percorrer os slides de 1 em 1*/
let contador;

let slides = document.getElementsByClassName("slides");
let miniaturas = document.querySelectorAll(".miniaturas");

/*Condição 1 - Caso o numero de imagens seja maior que o tamanho do slider
ai ele volta para a primeira imagem do slider*/
if(numero > slides.length ){indiceSlides = 1}

/*Condiçao 2 - Caso o numero de iagens seja menor que o tamanho do slider
o Loop for vai percorrer por todas as imagens e miniaturas
e adicionar o diaplay none*/
if(numero < 1){ indiceSlides = slides.length};
for (contador = 0; contador < slides.length; contador++){
slides[contador].style.display = "none";
miniaturas[contador].classList.remove("active");
}

/*Deixar a imagem atual do slider como ativa*/
slides[indiceSlides - 1].style.display = "block";
/*O mesmo será feito com a miniatura correspondente*/
miniaturas[indiceSlides - 1].classList.add("active");
}


