"use strict"

const $caixaUsuarioImagem = document.getElementById("imgCriador");
const $caixaRedeSocial = document.getElementById("caixaRedeSocial");


const resetAnimacao = (el) => {

    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = null;

}

const mostrarRedeSocial = () => {

    $caixaRedeSocial.classList.remove("esconderAniamacaoUsuario");
    $caixaRedeSocial.classList.add("mostrarAniamacaoUsuario");

}


const esconderRedeSocial = () => {

    $caixaRedeSocial.classList.remove("mostrarAniamacaoUsuario");
    $caixaRedeSocial.classList.add("esconderAniamacaoUsuario");

}


const mostrarEsconderRedeSocial = () => {
    const classeRedeSocial = $caixaRedeSocial.getAttribute("class");

    $caixaRedeSocial.style.display = "block";

    if (classeRedeSocial === "esconderAniamacaoUsuario" || classeRedeSocial === null) {
        mostrarRedeSocial();

    } else {
        esconderRedeSocial();

    }
}


const desabilitarElemento = (evento) => {

    evento.animationName === "esconderAnimacaoUsuario" ? $caixaRedeSocial.style.display = "none" : "";

}


const mostrarCarregando = (condicao) => {

    const $lista = document.getElementById("listaCards");

    $lista.innerHTML = `
        <div id="carregar" class="boxLoading esconde">
            <div class="loading">
                <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
            </div>
        </div>
    `;

    const $carregar = document.getElementById("carregar");

    if (condicao) {
        $carregar.classList.remove("esconde");

    } else {
        $carregar.classList.add("esconde");

    }

}


const mostrarCarregandoCard = (condicao, card) => {

    const $carregar = card.children[2];
    const $caixaCentraliza = document.getElementById("caixaCentraliza");

    if (condicao) {

        const $todosCarregar = Array.from(document.querySelectorAll(".boxLoadingCard"));

        $todosCarregar.forEach(elemento => {
            elemento.parentNode.removeChild(elemento);
        }); // Limpa de todos os outros cards o carregar

        if ($carregar === undefined) {
            card.innerHTML += `
                <div class="boxLoadingCard">
                    <div class="loadingCard">
                        <div></div>
                    </div>
                </div>
            `; // Adiciona o carregar no card clicado
        }

    } else {
        card.removeChild($carregar);

    }

}


const animacaoTocandoMusica = ($botaoConteudoAlbum, $botaoTocarMusica, $botaoPausarMusica) => {

    resetAnimacao($botaoConteudoAlbum);

    $botaoConteudoAlbum.classList.remove("animacaoPause");
    $botaoConteudoAlbum.classList.add("animacaoTocando");

    $botaoTocarMusica.classList.add("esconde"); // Esconde botão de tocar
    $botaoPausarMusica.classList.remove("esconde"); // Exibe botão de pausar

}


const animacaoPauseMusica = ($botaoConteudoAlbum, $botaoTocarMusica, $botaoPausarMusica) => {

    resetAnimacao($botaoConteudoAlbum);

    $botaoConteudoAlbum.classList.remove("animacaoTocando");
    $botaoConteudoAlbum.classList.add("animacaoPause");

    $botaoPausarMusica.classList.add("esconde"); // Esconde botão de pausar
    $botaoTocarMusica.classList.remove("esconde"); // Exibe botão de tocar

}


const animacaoMutarMusica = ($botaoMutarMusica, $botaoDesmutarMusica) => {

    $botaoMutarMusica.classList.add("esconde"); // Esconde botão de mutar
    $botaoDesmutarMusica.classList.remove("esconde"); // Exibe botão de desmutar

}


const animacaoDesmutarMusica = ($botaoMutarMusica, $botaoDesmutarMusica) => {

    $botaoDesmutarMusica.classList.add("esconde"); // Esconde botão de desmutar
    $botaoMutarMusica.classList.remove("esconde"); // Exibe botão de mutar

}


$caixaUsuarioImagem.addEventListener("click", mostrarEsconderRedeSocial);

$caixaRedeSocial.addEventListener("animationend", (evento) => desabilitarElemento(evento));
