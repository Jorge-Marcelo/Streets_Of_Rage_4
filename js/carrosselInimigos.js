var imagemAtual = 0;
var totalImagens = 15;
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

function carrossel(index) {
const imagens = document.querySelectorAll("img");
imagens.forEach(function (image) {
image.classList.remove("active");
});

document.getElementById("img" + index).classList.add("active");
document.getElementById("legenda").textContent = characterName[index - 1];
imagemAtual = index - 1;
}

function proximo() {
document.getElementById("img" + (imagemAtual + 1)).classList.remove("active");
imagemAtual = (imagemAtual + 1) % totalImagens;
document.getElementById("img" + (imagemAtual + 1)).classList.add("active");
document.getElementById("legenda").textContent = characterName[imagemAtual];
}

function anterior() {
document.getElementById("img" + (imagemAtual + 1)).classList.remove("active");
imagemAtual = (totalImagens + imagemAtual - 1) % totalImagens;
document.getElementById("img" + (imagemAtual + 1)).classList.add("active");
document.getElementById("legenda").textContent = characterName[imagemAtual];
}

proximo();
anterior();

