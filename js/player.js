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

    const barraProgressoAtual = parseFloat($audio.currentTime.toFixed(2));

    $barra.max = $audio.duration;
    $barra.value = barraProgressoAtual;

}


const alterarBarraTempo = (evento, $audio) => {

    const tempoEscolhido = evento.target.value;

    $audio.currentTime = tempoEscolhido;

}
