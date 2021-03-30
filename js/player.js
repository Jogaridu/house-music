"use strict";

const tocandoMusica = ($audio, $tempoMusica) => {

    $audio.play();

    $audio.addEventListener("timeupdate", () => barraTempoAtualiza($audio, $tempoMusica));

}


const pauseMusica = ($audio) => $audio.pause();


const mutarMusica = ($audio) => $audio.muted = true;


const desmutarMusica = ($audio) => $audio.muted = false;


const barraTempoAtualiza = ($audio, $tempoMusica) => {

    const $barra = document.getElementById("barra");

    const barraProgressoAtual = parseFloat($audio.currentTime.toFixed(2));

    $barra.max = $audio.duration;
    $barra.value = barraProgressoAtual;


    // Exibe os segundos na tela
    let segundoAtual = parseInt($audio.currentTime).toString();
    const totalSegundos = parseInt($audio.duration);

    segundoAtual = segundoAtual.length === 1 ? segundoAtual.replace(segundoAtual, `0${segundoAtual}`) : segundoAtual;

    $tempoMusica.innerText = `00:${segundoAtual} / 00:${totalSegundos}`;

}


const alterarBarraTempo = (evento, $audio) => {

    const tempoEscolhido = evento.target.value;

    $audio.currentTime = tempoEscolhido;

}
