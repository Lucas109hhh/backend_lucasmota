const readline = require("readline-sync");

let limite = readline.questionInt("Digite até qual numero quer rodar o FizzBuzz: ");

for (let numero = 1; numero <= limite; numero++) {

    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (numero % 3 === 0) {
        console.log("Fizz");
    }
    else if (numero % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(numero);
    }
}