const readline = require("readline-sync");

let base = readline.questionInt("Digite a base do retângulo: ");
let altura = readline.questionInt("Digite a altura do retângulo: ");

let area = base * altura;
let perimetro = 2 * (base + altura);

console.log(`A área do retângulo é ${area}.`);
console.log(`O perímetro do retângulo é ${perimetro}.`);