"use strict"

const $botaoPesquisar = document.getElementById("btnPesquisar");
const $inputPesquisar = document.getElementById("nomeArtista");

$botaoPesquisar.addEventListener("click", () => {

    mostrarCarregando(true); // Carregamento será exibido

    pesquisarMusicaDreezer();

});

$inputPesquisar.addEventListener("keyup", (evento) => {

    const key = evento.which || evento.keyCode;

    if (key == 13) {

        mostrarCarregando(true);
        pesquisarMusicaDreezer();

    }

});



