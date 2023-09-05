/*
Autor: Jorge Marcelo
Data de Criação: 05/09/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/

/*Inicializando a variavel do indice do slider*/
let indiceBosses = 1;
mostrarBosseslSlides(indiceBosses);

/*Função responsavel pelos botões de controle*/
function SliderControl(indice) {
mostrarBosseslSlides(indiceBosses = indiceBosses + indice);
}

/*Função que mostra a imagem atual do slider*/
function mostrarBosseslSlides(indice) {

/*Contador que vai percorrer os slides de 1 em 1*/
let contadorBossesSlider;
let slidesBosses = document.getElementsByClassName("slidesBosses");

/*Condição 1 - Caso o numero de imagens seja maior que o tamanho do slider
ai ele volta para a primeira imagem do slider*/
if (indice > slidesBosses.length) {
indiceBosses = 1;
}

/*Condiçao 2 - Caso o numero de iagens seja menor que o tamanho do slider
o Loop for vai percorrer por todas as imagens
e adicionar o diaplay none*/
if (indice < 1) {
indiceBosses = slidesBosses.length;
}
for (contadorBossesSlider = 0; contadorBossesSlider < slidesBosses.length; contadorBossesSlider++){
slidesBosses[contadorBossesSlider].classList.remove("active");
}

/*Deixar a imagem atual do slider como ativa*/
slidesBosses[indiceBosses - 1].classList.add("active");
}
