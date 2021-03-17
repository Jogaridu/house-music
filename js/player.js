"use strict";

const tocandoMusica = ($audio) => {

    $audio.play();

    $audio.addEventListener("timeupdate", () => barraTempoAtualiza($audio));

}

const pauseMusica = ($audio) => $audio.pause();

const mutarMusica = ($audio) => $audio.muted = true;

const desmutarMusica = ($audio) => $audio.muted = false;


const barraTempoAtualiza = ($audio) => {

    const $barra = document.getElementById("barra");
    const $marcador = document.getElementById("marcador");

    const barraProgressoAtual = parseInt(($audio.currentTime / $audio.duration) * 100);

    $barra.style.width = `${barraProgressoAtual}%`;
    $marcador.style.left = `${barraProgressoAtual - 1}%`;

}
