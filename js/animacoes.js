"use strict"

const $caixaUsuarioImagem = document.getElementById("imgCriador");
const $caixaRedeSocial = document.getElementById("caixaRedeSocial");

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

    const $carregar = document.getElementById("carregar");

    if (condicao) {
        $carregar.classList.remove("esconde");

    } else {
        $carregar.classList.add("esconde");

    }

}

const mostrarCarregandoCard = (condicao, card) => {

    const $carregar = card.children[2];
    const $caixaCentraliza = document.getElementById("caixaCentraliza")

    if (condicao) {
        if ($carregar === undefined) {
            card.innerHTML += `
                <div class="boxLoadingCard">
                    <div class="loadingCard">
                        <div></div>
                    </div>
                </div>
            `;

            $caixaCentraliza.classList.add("semClicar");
        }

    } else {
        card.removeChild($carregar);
        $caixaCentraliza.classList.remove("semClicar");

    }

}


$caixaUsuarioImagem.addEventListener("click", mostrarEsconderRedeSocial);

$caixaRedeSocial.addEventListener("animationend", (evento) => desabilitarElemento(evento));
