const readline = require("readline-sync");

let limite = readline.questionInt("Deseja somar numeros pares ate qual numero? ");

let soma = 0;

for (let i = 1; i <= limite; i++) {
    if (i % 2 == 0) {
        soma = soma + i;
    }
}

console.log(`A soma dos numeros pares de 1 a ${limite} e: ${soma}`);