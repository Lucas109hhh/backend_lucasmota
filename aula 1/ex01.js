const input = require ("readline-sync")

let nome = input.question("Qual seu nome?")
let idade = input.questionInt("Qual sua idade?")
let cidade = input.question("Onde você vive?")

console.log(`Olá, meu nome é ${nome}, eu tenho ${idade}, e vivo em ${cidade}`)