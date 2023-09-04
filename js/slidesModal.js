// Variável para rastrear o índice do slide atual
let inidicesModalSlides = 1;

// Inicializa o slider com o primeiro slide
mostrarModalSlides(inidicesModalSlides);

// Função para controlar o slider
function SliderControl(indice) {
  mostrarModalSlides(inidicesModalSlides = inidicesModalSlides + indice); // Use a variável inidicesModalSlides
}


// Função para mostrar um slide específico
function mostrarModalSlides(indice) {
  let contadorModalSlides;
  let slidesModal = document.getElementsByClassName("slidesModal");

  // Verifica se o número do slide está fora dos limites
  if (indice > slidesModal.length) {
    inidicesModalSlides = 1;
  }
  if (indice < 1) {
    inidicesModalSlides = slidesModal.length;
  }

  // Oculta todos os slides
  for (contadorModalSlides = 0; contadorModalSlides < slidesModal.length; contadorModalSlides++) {
    slidesModal[contadorModalSlides].classList.remove("active");
  }

  // Mostra apenas o slide ativo
  slidesModal[inidicesModalSlides - 1].classList.add("active");
}
