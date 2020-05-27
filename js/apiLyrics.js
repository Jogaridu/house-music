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

    if(letra.lyrics !== undefined) {
        document.querySelector(".saidaLetra").innerText = letra.lyrics;

    } else {
        document.querySelector(".saidaLetra").innerText = "A música não possui letra ou não foi localizada no banco...";

    }
    
}

const pesquisarLetra = async (evento) => {

    const cardItem = evento.target.parentNode;

    if (cardItem.getAttribute("class") === "conteudoAlbum") {
        cardItem = cardItem.parentNode;

    }

    const idMusica = cardItem.getAttribute("id");
    const cardItemFilhos = cardItem.children;
    const nomeArtista = cardItemFilhos[0].getAttribute("alt");
    const nomeMusica = cardItemFilhos[0].getAttribute("title");

    const url = `https://api.lyrics.ovh/v1/${nomeArtista}/${nomeMusica}`

    const pegarLetra = await fetch(url);

    const jsonLetra = await pegarLetra.json();
    
    preencherLetra(jsonLetra, idMusica);
    
}