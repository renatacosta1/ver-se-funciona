/*let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag,texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela('h1' , 'Jogo do número Secreto');
exibirTextoNaTela ('p' , 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random()*10 + 1);
}
*/
 
function exibirOla(){
console.log("oieh,tudo bem?!");
}
exibirOla();

function exibirOlaNome(nome){
console.log( ` Olá,${nome}!`);
}
exibirOlaNome("pikachu");

function calcularCubo(numero){
return numero * 3 * 3 * 3;
}

let resultadoCubo = calcularCubo(5);
console.log(resultadoCubo);

function calcularMedia(a,b,c){
return(a+b+c)/3;
}
 
let media = calcularMedia(9,7,10);
console.log(media);
 
function encontrarMaior(a,b){
return a>b? a : b;
}
let maiorNumero = encontrarMaior(20,15);
console.log(maiorNumero)

function calcularCubo(numero){
  return numero * numero * numero;
}
let resultado = resultadoCubo(3);
console.log(resultado);