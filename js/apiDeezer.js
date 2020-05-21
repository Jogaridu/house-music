"use strict"
var db = null;

const limparExibicao = () => {
    document.getElementById("caixaExibicao").innerHTML = "";

}

const criarCard = (arrayMusicaInfo) => {
    const card = `
    <li id='${arrayMusicaInfo.id}' class='cardItens'>
        <img src="${arrayMusicaInfo.album.cover_big}" alt="${arrayMusicaInfo.artist.name}" title="${arrayMusicaInfo.title_short}" class='imgAlbum'>
        <div class='conteudoAlbum'>
            <p class='formartarTexto'>${arrayMusicaInfo.album.title}</p>
            <p class='formatarTexto'>${arrayMusicaInfo.title_short} - ${arrayMusicaInfo.artist.name}</p>
        </div>
    </li>`;

    return card;
}

const criarEventoClickCard = () => {
    const $arrayCardMusicas = document.querySelectorAll(".cardItens");

    $arrayCardMusicas.forEach(elemento => {
        elemento.addEventListener("click", (evento) => pesquisarLetra(evento));

    });
}

const preencherMusica = (todasMusicaCompleta) => {
    
    console.log(todasMusicaCompleta);
    const $listaCards = document.getElementById("listaCards");
    console.log(todasMusicaCompleta);

    if (todasMusicaCompleta.length !== 0) {
        
        $listaCards.innerHTML = "";

        todasMusicaCompleta.forEach(elemento => {
        $listaCards.innerHTML += criarCard(elemento);

        });

        criarEventoClickCard();

    } else {
        $listaCards.innerHTML = "<h1>Artista não encontrado</h1>"

    }
}

const pesquisarMusicaDreezer = async () => {

    const $inputArtista = document.getElementById("nomeArtista").value;

    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${$inputArtista}`

    const pegarMusica = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "a3102307e5mshab623a8c5d43e46p169e30jsn4a94692ade61"
        }
    });

    const jsonMusicaCompleta = await pegarMusica.json();

    db = jsonMusicaCompleta.data;
    
    limparExibicao();
    preencherMusica(jsonMusicaCompleta.data);
}
