function reverter(array) {
    let novoArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i]);
    }

    return novoArray;
}

let original = [1, 2, 3, 4, 5];
let invertido = reverter(original);

console.log(`Array original: ${original}`);
console.log(`Array invertido: ${invertido}`);