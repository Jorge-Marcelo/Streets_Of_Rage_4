/*
Autor: Jorge Marcelo
Data de Criação: 06/09/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/

/*Capaiturando estilo da animação com o DOM*/ 
const alvos = document.querySelectorAll("[scroll-anim]");
const animationClass = "animation";


function animScroll() {
/*A animação so vai ocorrer a partir de tres quartos da tela */
const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

/*Pegando todos os elementos com forEach*/
alvos.forEach(function (elemento) {
/*Se a largura da janela for maior que a largura do elemento
a ser animado aplica o scroll se não não aplica*/ 
if (windowTop > elemento.offsetTop) {
elemento.classList.add(animationClass);
} else {
elemento.classList.remove(animationClass);
}
});
}

/*Escutador de evento que sera aplicado na janela*/
window.addEventListener("scroll", animScroll);
animScroll();