const input = require("readline-sync");

let soma = 0;

for (let i = 0; i < 5; i++) {
    let nota = input.questionInt("Digite o valor: ");
    soma = soma + nota;
}

let media = soma / 5;

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperacao");
} else {
    console.log("Reprovado");
}