const readline = require("readline-sync");

let numero = readline.questionInt("Digite um numero: ");

let resultado = (numero % 2 === 0) ? "par" : "impar";

console.log(`O numero ${numero} é ${resultado}.`);