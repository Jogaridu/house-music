"use strict"

const preencherLetra = (letra, idMusica) => {
    const $caixaExibicao = document.getElementById("caixaExibicao");

    let arrayMusicaInfo = null;

    bdMusicas.forEach(musicaInfo => {
        if (musicaInfo.id == idMusica) {
            arrayMusicaInfo = musicaInfo;

        }
    });

    const caixaExibicao = `
    <img src="${arrayMusicaInfo.album.cover_big}" alt="${arrayMusicaInfo.artist.name}" class="imgAlbum"> <br>

    <div class="conteudoAlbum">
        <p class="formatarTexto">${arrayMusicaInfo.title_short} - ${arrayMusicaInfo.artist.name}</p>
    </div>

    <audio controls>
        <source src="${arrayMusicaInfo.preview}">
    </audio> 
    
    <div class="saidaLetra"></div>
    `;

    $caixaExibicao.innerHTML = "";
    $caixaExibicao.innerHTML = caixaExibicao;

    if (letra.lyrics !== undefined) {
        document.querySelector(".saidaLetra").innerText = letra.lyrics;

    } else {
        document.querySelector(".saidaLetra").innerText = "A música não possui letra ou não foi localizada no banco...";

    }

}

const pesquisarLetra = async (evento) => {

    const $cardMusica = evento.target;

    const nomeArtista = $cardMusica.dataset.artista; // Resgata o nome do artista do data
    const nomeMusica = $cardMusica.dataset.musica; // Resgata o nome da música do data
    const idMusica = $cardMusica.getAttribute("id"); // Pega o ID da música

    mostrarCarregandoCard(true, $cardMusica); // Exibe carregamento da letra

    const url = `https://api.lyrics.ovh/v1/${nomeArtista}/${nomeMusica}`;

    const pegarLetra = await fetch(url);

    const jsonLetra = await pegarLetra.json();

    mostrarCarregandoCard(false, $cardMusica); // Esconde carregamento da letra

    preencherLetra(jsonLetra, idMusica);

}