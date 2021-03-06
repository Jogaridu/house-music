"use strict"
var bdMusicas = null;

const limparExibicao = () => {
    document.getElementById("caixaExibicao").innerHTML = "";

}

const criarCard = (arrayMusicaInfo) => {

    const card = `
    <li id='${arrayMusicaInfo.id}' class='cardItens' data-artista="${arrayMusicaInfo.artist.name}" data-musica="${arrayMusicaInfo.title_short}">
        <img src="${arrayMusicaInfo.album.cover_big}" alt="${arrayMusicaInfo.artist.name}" title="${arrayMusicaInfo.title_short}" class='imgAlbum'>
        <div class='conteudoAlbum'>
            <p class='formartarTexto'>${arrayMusicaInfo.artist.name}</p>
            <p class='formatarTexto'>${arrayMusicaInfo.title_short}</p>
        </div>
    </li>`;

    return card;
}

const criarEventoClickCard = () => {
    const $arrayCardMusicas = document.querySelectorAll(".cardItens"); // Pegando todos os cards

    $arrayCardMusicas.forEach(elemento => {
        elemento.addEventListener("click", (evento) => pesquisarLetra(evento)); // Adicionando o evento click, para pesquisar a letra da música

    });
}

const preencherMusica = (todasMusicaCompleta) => {

    const $listaCards = document.getElementById("listaCards"); // Pegando a lista que vai receber os cards

    // Teste lógico para saber se o artita/banda/musica existe no banco. TRATAMENTO DE ERRO
    if (todasMusicaCompleta.length !== 0) {

        $listaCards.innerHTML = ""; // Limpando a lista de cards (caso o usuário já tenha pesquisado, ela limpa a lista da pesquisa anterior)

        todasMusicaCompleta.forEach(elemento => {
            $listaCards.innerHTML += criarCard(elemento); // Criando o card com as informações de cada música dentro do bdMusicas

        });

        criarEventoClickCard(); // Adicionando evento click em todos os cards inseridos

    } else {
        $listaCards.innerHTML = "<h1>Artista não encontrado</h1>" // Resposta ao usuário caso a pesquisa não tenha sido realizada com sucesso

    }
}

const pesquisarMusicaDreezer = async () => {

    const $inputArtista = document.getElementById("nomeArtista").value; // Pegando a pesquisa do usuário

    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${$inputArtista}` // Url da API

    // Realizando a requisição com o FETCH
    const pegarMusica = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "a3102307e5mshab623a8c5d43e46p169e30jsn4a94692ade61"
        }
    });

    const jsonMusicaCompleta = await pegarMusica.json(); // Transformando as informações em um JSON

    mostrarCarregando(false); // Esconde o carregar

    bdMusicas = jsonMusicaCompleta.data; // Guardando todas as músicas da pesquisa em um BD

    limparExibicao(); // Limpando a exibição do áudio da música
    preencherMusica(jsonMusicaCompleta.data); // Preencher as músicas no HTML
}
