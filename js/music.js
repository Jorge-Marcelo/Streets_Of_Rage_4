/*
Autor: Jorge Marcelo
Data de Criação: 05/09/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 


/*Função palay music*/
const playMusic = document.getElementById("play");
playMusic.addEventListener("click", function(){
const music = document.querySelector(".music");
music.play();
})

/*Função pause music*/
const pauseMusic = document.getElementById("pause");
pauseMusic.addEventListener("click", function(){
const music = document.querySelector(".music");
music.pause();
})

