"use strict"

const $caixaUsuarioImagem = document.getElementById("imgCriador");
const $caixaRedeSocial = document.getElementById("caixaRedeSocial");

const mostrarRedeSocial = () => {
    
    $caixaRedeSocial.classList.remove("esconderAniamacaoUsuario");
    $caixaRedeSocial.classList.add("mostrarAniamacaoUsuario");
    
}

const esconderRedeSocial = () => {

    $caixaRedeSocial.classList.remove("mostrarAniamacaoUsuario");
    $caixaRedeSocial.classList.add("esconderAniamacaoUsuario");

}

const mostrarEsconderRedeSocial = () => {
    const classeRedeSocial = $caixaRedeSocial.getAttribute("class");

    $caixaRedeSocial.style.display = "block";

    if (classeRedeSocial === "esconderAniamacaoUsuario" || classeRedeSocial === null) {
        mostrarRedeSocial();

    } else {
        esconderRedeSocial();

    }
}

const desabilitarElemento = (evento) => {

    evento.animationName === "esconderAnimacaoUsuario"? $caixaRedeSocial.style.display = "none":"";
        
}


$caixaUsuarioImagem.addEventListener("click", mostrarEsconderRedeSocial);

$caixaRedeSocial.addEventListener("animationend", (evento) => desabilitarElemento(evento));
