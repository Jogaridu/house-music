function iniciarConstantesPlayer() {

    const $audio = document.getElementById("audio");

    const $botaoTocarMusica = document.getElementById("tocar");
    const $botaoPausarMusica = document.getElementById("pausar");

    const $botaoMutarMusica = document.getElementById("mutar");
    const $botaoDesmutarMusica = document.getElementById("desmutar");

    const $botaoConteudoAlbum = document.getElementById("conteudoAlbum");

    $botaoTocarMusica.addEventListener("click", () => animacaoTocandoMusica($botaoConteudoAlbum, $botaoTocarMusica, $botaoPausarMusica));

    $botaoPausarMusica.addEventListener("click", () => animacaoPauseMusica($botaoConteudoAlbum, $botaoTocarMusica, $botaoPausarMusica));

    $botaoMutarMusica.addEventListener("click", () => animacaoMutarMusica($botaoMutarMusica, $botaoDesmutarMusica));

    $botaoDesmutarMusica.addEventListener("click", () => animacaoDesmutarMusica($botaoMutarMusica, $botaoDesmutarMusica));

    $botaoTocarMusica.addEventListener("click", () => tocandoMusica($audio));

    $botaoPausarMusica.addEventListener("click", () => pauseMusica($audio));

    $botaoMutarMusica.addEventListener("click", () => mutarMusica($audio));

    $botaoDesmutarMusica.addEventListener("click", () => desmutarMusica($audio));

}
