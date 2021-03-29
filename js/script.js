"use strict"

const $botaoPesquisar = document.getElementById("btnPesquisar");
const $inputPesquisar = document.getElementById("nomeArtista");
iniciarConstantesPlayer();

$botaoPesquisar.addEventListener("click", () => {

    limparExibicao(); // Limpando a exibição do áudio da música

    mostrarCarregando(true); // Carregamento será exibido

    pesquisarMusicaDreezer();

});

$inputPesquisar.addEventListener("keyup", (evento) => {

    const key = evento.which || evento.keyCode;

    if (key == 13) {

        limparExibicao();
        mostrarCarregando(true);
        pesquisarMusicaDreezer();

    }

});



