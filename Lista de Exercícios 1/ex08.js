const readline = require("readline-sync");

let tamanho = readline.questionInt("Digite o tamanho do tabuleiro: ");

let tabuleiro = "";

for (let linha = 0; linha < tamanho; linha++) {
    for (let coluna = 0; coluna < tamanho; coluna++) {
        if ((linha + coluna) % 2 == 0) {
            tabuleiro = tabuleiro + "#";
        } else {
            tabuleiro = tabuleiro + " ";
        }
    }

    tabuleiro = tabuleiro + "\n";
}

console.log(`${tabuleiro}`);