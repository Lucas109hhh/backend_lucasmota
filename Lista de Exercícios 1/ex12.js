function calcular(a, b, operacao) {
    return operacao(a, b);
}

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

let resultado1 = calcular(15, 10, somar);
let resultado2 = calcular(15, 10, subtrair);
let resultado3 = calcular(15, 10, multiplicar);

console.log(`Soma: ${resultado1}`);
console.log(`Subtracao: ${resultado2}`);
console.log(`Multiplicacao: ${resultado3}`);