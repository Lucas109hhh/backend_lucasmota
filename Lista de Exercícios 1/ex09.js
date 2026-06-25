const readline = require("readline-sync");

const min = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};

let num1 = readline.questionInt("Digite o primeiro numero: ");
let num2 = readline.questionInt("Digite o segundo numero: ");

console.log(`O menor numero e: ${min(num1, num2)}`);