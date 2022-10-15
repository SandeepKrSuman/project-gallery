/**
 * Faça um programa que converta metros para centímetros
 * 
 * ENTRADA         SAÍDA
 *    1              100
 *  100            10000
 *   .5               50
 * 
 * Tarefa:
 * - Altere a variável cm para calcular o valor com base na entrada (metros)
 *   $ node lista-01/js02-metros-para-centimetros.js
 *   👉 1 metro(s) == 100 centímetro(s)
 *  - altere a variável de entrada metros para os valores da lista de ENTRADA/SAÍDA
 *    e compare se o resultado é o esperado
 */

// Entrada
var metros = 1
// Altere a expressão abaixo para calcular cm com base na var metros
var cm = (metros) * 100


function conversorparametros(){
    const centimetro = document.querySelector(".centimetros").value
    var conversor= parseFloat(centimetro) * 100
    const metros = document.querySelector(".metros")
    metros.value = conversor
}