const readline = require("readline-sync");

function reverter(array) {
    let novoArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i]);
    }

    return novoArray;
}

let quantidade = Number(readline.question("Quantos numeros voce quer digitar? "));

let original = [];

for (let i = 0; i < quantidade; i++) {
    let numero = Number(readline.question(`Digite o ${i + 1}º numero: `));
    original.push(numero);
}

let invertido = reverter(original);

console.log(`Array original: ${original}`);
console.log(`Array invertido: ${invertido}`);