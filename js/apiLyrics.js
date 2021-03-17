"use strict"

const preencherLetra = (idMusica, letra = undefined) => {

    console.log(letra);
    if (letra === undefined) {

        document.querySelector("#caixaExibicao").innerText = "Falha no sistema...";

    } else {

        const $caixaExibicao = document.getElementById("caixaExibicao");

        let arrayMusicaInfo = null;

        bdMusicas.forEach(musicaInfo => {
            if (musicaInfo.id == idMusica) {
                arrayMusicaInfo = musicaInfo;

            }
        });

        const caixaExibicao = `
            <span>
                <div>
                    <img src="${arrayMusicaInfo.album.cover_big}" alt="${arrayMusicaInfo.artist.name}" class="imgAlbum"> <br>

                    <div id="conteudoAlbum" class="conteudoAlbum">
                        <p class="formatarTexto">${arrayMusicaInfo.artist.name}</p>
                        <p class="formatarTexto destaque">${arrayMusicaInfo.title_short}</p>
                    </div>

                    <div id="barraTempo">
                        <div id="barra"></div>
                        <div id="marcador"></div>
                    </div>

                    <div id="player">
                        <img src="/image/tocar.png" alt="Opção do player" class="iconePlayer" id="tocar">
                        <img src="/image/pause.png" alt="Opção do player" class="iconePlayer esconde" id="pausar">
                        <img src="/image/volume.png" alt="Opção do player" class="iconePlayer" id="mutar">
                        <img src="/image/muta.png" alt="Opção do player" class="iconePlayer esconde" id="desmutar">
                    </div>

                    <audio controls id="audio" class="esconde">
                         <source src="${arrayMusicaInfo.preview}">
                     </audio>
                </div>
            </span>
            <div class="saidaLetra"></div>
        `;

        $caixaExibicao.innerHTML = "";
        $caixaExibicao.innerHTML = caixaExibicao;

        if (letra.lyrics !== undefined) {
            document.querySelector(".saidaLetra").innerText = letra.lyrics;

        } else {
            document.querySelector(".saidaLetra").innerText = "A música não possui letra ou não foi localizada no banco...";

        }

        scroll({ top: 170, left: 0, behavior: 'smooth' });

    }

}

const pesquisarLetra = async (evento) => {

    const $cardMusica = evento.target;

    const nomeArtista = $cardMusica.dataset.artista; // Resgata o nome do artista do data
    const nomeMusica = $cardMusica.dataset.musica; // Resgata o nome da música do data
    const idMusica = $cardMusica.getAttribute("id"); // Pega o ID da música

    mostrarCarregandoCard(true, $cardMusica); // Exibe carregamento da letra

    try {

        const url = `https://api.lyrics.ovh/v1/${nomeArtista}/${nomeMusica}`;

        const pegarLetra = await fetch(url);

        const jsonLetra = await pegarLetra.json();

        preencherLetra(idMusica, jsonLetra);

        mostrarCarregandoCard(false, $cardMusica); // Esconde carregamento da letra

        iniciarConstantesPlayer();

    } catch (error) {

        preencherLetra(idMusica);

        mostrarCarregandoCard(false, $cardMusica); // Esconde carregamento da letra

    }

}