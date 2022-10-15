let personagem = document.querySelector(".personagem");
let pontosNaTela = document.querySelector(".pontos");
let nuvens = document.querySelector(".nuvens");
let obstaculo = document.querySelector(".obstaculo");
let telaFimJogo = document.querySelector(".fimJogo");
let obstaculoPosicao = obstaculo.offsetLeft;
let pontos = 0

function fimJogo() {
    resetarPonto();
    obstaculo.style.animation = "none";
    nuvens.style.animation = "none";
    obstaculo.style.left = `${obstaculoPosicao}px`;
    personagem.src = 'img/gato-morto.png';
    telaFimJogo.classList.remove("d-none");
}

function pular(){
    addPonto();
    personagem.classList.add("jump");
    setTimeout(() => {
        personagem.classList.remove("jump");
    }, 500);
}

function addPonto(){
    pontos++;
    pontosNaTela.innerHTML = `${pontos} pontos`;
}

function resetarPonto(){
    pontos = 0;
    pontosNaTela.innerHTML = `${pontos} pontos`;
}



addEventListener("keyup", (event) => {
    if (event.keyCode === 38) {
        pular();
    }
})



let loop = setInterval(() => {
    let personagemPosicaoNumerico = +window.getComputedStyle(personagem).bottom.replace('px', '');
    obstaculoPosicao = obstaculo.offsetLeft;

    if (obstaculoPosicao <= 60 && obstaculoPosicao > 0 && personagemPosicaoNumerico < 70) {
        fimJogo();
    }
}, 30);