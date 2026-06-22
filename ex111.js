const readline = require("readline-sync");

function podeVotar(idade) {
    if (idade >= 16) {
        return true;
    } else {
        return false;
    }
}

let idade = readline.questionInt("Digite sua idade: ");

if (podeVotar(idade)) {
    console.log(`Voce pode votar.`);
} else {
    console.log(`Voce nao pode votar.`);
}