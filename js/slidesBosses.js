
let indiceBosses = 1;

mostrarBosseslSlides(indiceBosses);

function SliderControl(indice) {
mostrarBosseslSlides(indiceBosses = indiceBosses + indice);
}


function mostrarBosseslSlides(indice) {
let contadorBossesSlider;
let slidesBosses = document.getElementsByClassName("slidesBosses");

if (indice > slidesBosses.length) {
indiceBosses = 1;
}

if (indice < 1) {
indiceBosses = slidesBosses.length;
}


for (contadorBossesSlider = 0; contadorBossesSlider < slidesBosses.length; contadorBossesSlider++){
slidesBosses[contadorBossesSlider].classList.remove("active");
}
slidesBosses[indiceBosses - 1].classList.add("active");
}
