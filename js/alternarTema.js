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


let aCadaMeioMinuto = 30000;
setInterval(verificarHoras, aCadaMeioMinuto);


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

function light() {
    aCadaMeioMinuto = 86400000;
    trocarParaTemaClaro();
} // light

function dark() {
    aCadaMeioMinuto = 86400000;
    trocarParaTemaEscuro();
} // dark
