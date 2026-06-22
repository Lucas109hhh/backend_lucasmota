let soma = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        soma = soma + i;
    }
}

console.log(`A soma dos numeros pares de 1 a 50 e: ${soma}`);