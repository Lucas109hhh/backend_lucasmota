const input = require("readline-sync");

let tabuada = input.questionInt("Digite um numero para tabuada: ");

for(let i = 0; i<11; i++) {
    console.log(`${tabuada} * ${i} = ${tabuada * i}`);
}