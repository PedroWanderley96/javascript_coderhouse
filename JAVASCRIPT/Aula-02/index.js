const nome = 'Pedro'
const sobreNome = 'Wanderley'
const anoAtual = 2024
const idade = 28

const outputDiv = document.getElementById("output");

const fullName = nome + " " + sobrenome;
const idadeCalculada = "Idade: " + (anoAtual - 1996);

outputDiv.innerHTML = fullName + "<br>" + idadeCalculada;

const numberOne = prompt("digite o primeiro numero");
const numberTwo = prompt("digite o segundo numero");

const sum = numberOne + numberTwo;

console.log(sum);

const product = numberOne * numberTwo;

alert("o produdo entre " + numberOne + "e " + numberTwo + " é " + product);