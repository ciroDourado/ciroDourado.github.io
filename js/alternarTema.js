const tema = document.querySelector("link#temaGlobal");


function estaNoIntervaloDaNoite() {
    let atual = (new Date()).getHours();
    let noite     =  atual >=  17;
    let madrugada = (atual >=   0 && atual <= 5.5);
    return noite || madrugada;
}

function verificarHoras() {
    switch ( estaNoIntervaloDaNoite() ) {
        case true: trocarParaTemaEscuro(); break;
        default  : trocarParaTemaClaro();
    }
} // verificarHoras
verificarHoras();

let aCadaHora = 3600000;
setInterval(verificarHoras, aCadaHora);


function trocarParaTemaEscuro() {
    if (tema.getAttribute("href") == "css/temaClaro.css") {
        tema.href = "css/temaEscuro.css";
    }
} // trocarParaTemaEscuro

function trocarParaTemaClaro() {
    if (tema.getAttribute("href") == "css/temaEscuro.css") {
        tema.href = "css/temaClaro.css";
    }
} // trocarParaTemaClaro
