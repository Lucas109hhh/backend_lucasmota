const readline = require("readline-sync");

let tamanho = readline.questionInt("Digite o tamanho do triangulo: ");

let triangulo = "";

for (let i = 1; i <= tamanho; i++) {
    triangulo += "#";
    console.log(triangulo);
}