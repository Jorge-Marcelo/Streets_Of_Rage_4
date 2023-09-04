
let inidicesModalSlides = 1;

mostrarModalSlides(inidicesModalSlides);

function SliderControl(indice) {
mostrarModalSlides(inidicesModalSlides = inidicesModalSlides + indice);
}


function mostrarModalSlides(indice) {
let contadorModalSlides;
let slidesModal = document.getElementsByClassName("slidesModal");

if (indice > slidesModal.length) {
inidicesModalSlides = 1;
}

if (indice < 1) {
inidicesModalSlides = slidesModal.length;
}


for (contadorModalSlides = 0; contadorModalSlides < slidesModal.length; contadorModalSlides++){
slidesModal[contadorModalSlides].classList.remove("active");
}
slidesModal[inidicesModalSlides - 1].classList.add("active");
}
