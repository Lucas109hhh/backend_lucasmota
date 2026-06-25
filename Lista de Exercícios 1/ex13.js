const readline = require("readline-sync");

function range(inicio, fim) {
    let array = [];

    for (let i = inicio; i <= fim; i++) {
        array.push(i);
    }

    return array;
}

function soma(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }

    return total;
}

let inicio = readline.questionInt("Digite o inicio do range: ");
let fim = readline.questionInt("Digite o fim do range: ");

let resultado = soma(range(inicio, fim));

console.log(`A soma do range e: ${resultado}`);