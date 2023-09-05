/*
Autor: Jorge Marcelo
Data de Criação: 05/09/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 

/*Inicializando Variaveis*/
var imagemAtual = 0;
var totalImagens = 15;


/*Array com os nomes dos persongens*/ 
var characterName = [
" 1 - Galasia",
" 2 - Donovan",
" 3 - Signal",
" 4 - Dylan ",
" 5 - Garnet",
" 6 - Goro",
" 7 - Raven",
" 8 - Assassin Agent",
" 9 - Feroccio",
" 10 - Sugar",
" 11 - Victoria",
" 12 - Koobo",
" 13 - Big Ben",
" 14 - Murphy",
" 15 - Shadow"
];


/*Função que vai pegar todas as imagens do carrossel e vai remover a clsse de ativa*/ 
function carrossel(index) {
const imagens = document.querySelectorAll("img");
imagens.forEach(function (image) {
image.classList.remove("active");
});

/*Função que vai manter ativa a imagem atual*/
document.getElementById("img" + index).classList.add("active");
document.getElementById("legenda").textContent = characterName[index - 1];
imagemAtual = index - 1;
}

/*Função que vai passar uma imagem de 1 em 1 manterndo ativa a atual e remoendo a calsse atual das demais*/ 
function proximo() {
document.getElementById("img" + (imagemAtual + 1)).classList.remove("active");
imagemAtual = (imagemAtual + 1) % totalImagens;
document.getElementById("img" + (imagemAtual + 1)).classList.add("active");
document.getElementById("legenda").textContent = characterName[imagemAtual];
}

/*Essa função vai fazr a mesma coisa mas para o botão de voltar*/
function anterior() {
document.getElementById("img" + (imagemAtual + 1)).classList.remove("active");
imagemAtual = (totalImagens + imagemAtual - 1) % totalImagens;
document.getElementById("img" + (imagemAtual + 1)).classList.add("active");
document.getElementById("legenda").textContent = characterName[imagemAtual];
}

/*Chamando as funções*/
proximo();
anterior();

