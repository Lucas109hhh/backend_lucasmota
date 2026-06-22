function range(inicio, fim) {
    let array = [];

    for (let i = inicio; i <= fim; i++) {
        array.push(i);
    }

    return array;
}

function soma(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }

    return total;
}

let resultado = soma(range(1, 10));

console.log(`A soma do range e: ${resultado}`);