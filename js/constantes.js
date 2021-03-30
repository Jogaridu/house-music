function iniciarConstantesPlayer() {

    const $audio = document.getElementById("audio");

    const $botaoTocarMusica = document.getElementById("tocar");
    const $botaoPausarMusica = document.getElementById("pausar");

    const $botaoMutarMusica = document.getElementById("mutar");
    const $botaoDesmutarMusica = document.getElementById("desmutar");

    const $botaoConteudoAlbum = document.getElementById("conteudoAlbum");

    const $barra = document.getElementById("barra");

    const $tempoMusica = document.getElementById("tempoMusica");

    $audio.onended = () => animacaoPauseMusica($botaoConteudoAlbum, $botaoTocarMusica, $botaoPausarMusica);

    $botaoTocarMusica.addEventListener("click", () => animacaoTocandoMusica($botaoConteudoAlbum, $botaoTocarMusica, $botaoPausarMusica));

    $botaoPausarMusica.addEventListener("click", () => animacaoPauseMusica($botaoConteudoAlbum, $botaoTocarMusica, $botaoPausarMusica));

    $botaoMutarMusica.addEventListener("click", () => animacaoMutarMusica($botaoMutarMusica, $botaoDesmutarMusica));

    $botaoDesmutarMusica.addEventListener("click", () => animacaoDesmutarMusica($botaoMutarMusica, $botaoDesmutarMusica));

    $botaoTocarMusica.addEventListener("click", () => tocandoMusica($audio, $tempoMusica));

    $botaoPausarMusica.addEventListener("click", () => pauseMusica($audio));

    $botaoDesmutarMusica.addEventListener("click", () => desmutarMusica($audio));

    $barra.addEventListener("input", (evento) => alterarBarraTempo(evento, $audio, $tempoMusica));

}
