let produtos = [
    { id: 1, nome: "Teclado", preco: 80 },
    { id: 2, nome: "Mouse", preco: 50 },
    { id: 3, nome: "Monitor", preco: 900 },
    { id: 4, nome: "Headset", preco: 120 },
    { id: 5, nome: "Cadeira", preco: 300 }
];

let produtoId3 = produtos.find(p => p.id === 3);

console.log("Produto com id 3:");
console.log(`${produtoId3.nome} - R$${produtoId3.preco}`);

let caros = produtos.filter(p => p.preco > 100);

console.log("\nProdutos com preço acima de 100:");
caros.forEach(p => {
    console.log(`${p.nome} - R$${p.preco}`);
});

let nomes = produtos.map(p => p.nome);

console.log("\nNomes dos produtos:");
console.log(nomes);

console.log("\nCatálogo de produtos:");

produtos.forEach(p => {
    console.log(`ID: ${p.id} | Nome: ${p.nome} | Preço: R$${p.preco}`);
});