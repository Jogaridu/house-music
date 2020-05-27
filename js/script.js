"use strict"

const $botaoPesquisar = document.getElementById("btnPesquisar");
const $inputPesquisar = document.getElementById("nomeArtista");

$botaoPesquisar.addEventListener("click", pesquisarMusicaDreezer);
$inputPesquisar.addEventListener("keyup", (evento) => {
    const key = evento.which || evento.keyCode;
    if (key == 13) {
        pesquisarMusicaDreezer();
        
    }
});



