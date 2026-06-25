const readline = require("readline-sync");

function calcular(a, b, operacao) {
    return operacao(a, b);
}

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

let a = readline.questionInt("Digite o primeiro numero: ");
let b = readline.questionInt("Digite o segundo numero: ");

console.log("Escolha a operação:");
console.log("1 - somar");
console.log("2 - subtrair");
console.log("3 - multiplicar");

let opcao = readline.questionInt("Opcao: ");

let resultado;

if (opcao === 1) {
    resultado = calcular(a, b, somar);
} else if (opcao === 2) {
    resultado = calcular(a, b, subtrair);
} else if (opcao === 3) {
    resultado = calcular(a, b, multiplicar);
} else {
    console.log("Opcao invalida");
}

console.log(`Resultado: ${resultado}`);