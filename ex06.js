const input = require("readline-sync");

const secreto = 42;
let tentativas = 0;

while(true){ 
    let chute = input.questionInt("Digite um chute na senha: ")
    tentativas++;

    if(chute === secreto) {
        console.log(`Você acertou! Tentativas: ${tentativas}`)
        break;
    } else if(chute < secreto) {
        console.log(`O número secreto é maior`)
    } else {
        console.log(`O número secreto é menor`)
    }
}