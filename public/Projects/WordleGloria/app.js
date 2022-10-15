const palavraDoDia = "ARROZ";

let linha = 1;

let fimDeJogo = false;

let entrada = []; //Lista que recebe as letras digitadas

function validarTeclas(teclaDeEntrada) {
  if (fimDeJogo) {
    return;
  }

  let char = teclaDeEntrada;

  let alfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "ENTER",
    "DEL",
  ];

  if (!alfabeto.includes(char)) {
    console.log("tecla inválida", char); //Verifica se a tecla é válida
    return null;
  }

  if (char === "ENTER" && entrada.length === 5) {
    //Entra no validarEntrada e verifica o "enter"
    validarEntrada();

    linha += 1;
    entrada = [];

    return;
  }

  if (char === "DEL") {
    let posicao = entrada.length;
    entrada.pop();
    console.log(entrada);
    let elQuadrado = document.getElementById(`l${linha}c${posicao}`);
    elQuadrado.textContent = "";
    return;
  }

  if (char !== "ENTER") {
    entrada.push(char);
    console.log(entrada);
    exibeLetra(char);
  }
}
function exibeLetra(letra) {
  let elId = `l${linha}c${entrada.length}`;
  //const el = document.querySelector(`.quadrado${entrada.length - 1}`);
  const el = document.getElementById(elId);
  console.log(el);
  el.innerHTML = letra;
}

function validarEntrada() {
  console.log("apertei enter: ", entrada);
  console.log("validar se " + entrada + " é igual " + palavraDoDia);

  // entrada = a,r,r,o,z
  // palavraDoDia arroz

  let posicao = 0;
  for (let letra of palavraDoDia) {
    let elQuadrado = document.getElementById(`l${linha}c${posicao + 1}`);
    const letraExisteNaPalavraDoDia = palavraDoDia.includes(entrada[posicao]);
    if (letra === entrada[posicao]) {
      elQuadrado.classList.add("bt-verde");
    } else if (letraExisteNaPalavraDoDia) {
      elQuadrado.classList.add("bt-amarelo");
    } else {
      elQuadrado.classList.add("bt-cinza-escuro");
    }
    posicao++;
  }

  fimDeJogo = entrada.join("") == palavraDoDia;
  if (fimDeJogo) {
    console.log("FIM DE JOGO");
    return;
  }
}

/**
 * parar qdo fim de jogo
 * aceitar input do teclado (e nao so do clique)
 */

const ouvinteDeTeclas = (event) => {
  let tecla = event.key.toUpperCase();
  if (tecla === "BACKSPACE") {
    tecla = "DEL";
  }
  validarTeclas(tecla);
};

const tecladoClique = (event) => {
  if (event.target.classList.contains("botao")) {
    //Pega letra do teclado da tela e coloca na variável char
    let char = event.target.innerHTML.toUpperCase();
    console.log(char);
    validarTeclas(char);
  }
};

document.body.addEventListener("keydown", ouvinteDeTeclas);
