let alunos = [
    { nome: "João", nota: 8 },
    { nome: "Vitor", nota: 5 },
    { nome: "Leo", nota: 7 },
    { nome: "Thiago", nota: 9 },
    { nome: "Paulo", nota: 6 }
];

let alunosComSituacao = alunos.map(aluno => {
    if (aluno.nota >= 7) {
        return { ...aluno, situacao: "Aprovado" };
    } else {
        return { ...aluno, situacao: "Reprovado" };
    }
});

let aprovados = alunosComSituacao.filter(aluno => aluno.situacao === "Aprovado").length;

let somaNotas = 0;

alunos.forEach(aluno => {
    somaNotas = somaNotas + aluno.nota;
});

let media = somaNotas / alunos.length;

console.log(`Alunos com situacao:`);
alunosComSituacao.forEach(aluno => {
    console.log(`${aluno.nome} - Nota: ${aluno.nota} - ${aluno.situacao}`);
});

console.log(`\nQuantidade de aprovados: ${aprovados}`);
console.log(`Media geral da turma: ${media}`);