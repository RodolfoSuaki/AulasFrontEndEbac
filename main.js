class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const aluno1 = new Aluno ('Roberto', 10);
const aluno2 = new Aluno ('Osvaldo', 3);
const aluno3 = new Aluno ('Pedro', 7);
const aluno4 = new Aluno ('Amanda', 9);
const aluno5 = new Aluno ('Carolina', 9);
const aluno6 = new Aluno ('Cássia', 5);
const aluno7 = new Aluno ('Betina', 10);

arrayDeAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6, aluno7];

const alunosComNotasMaioresQueSete = arrayDeAlunos.filter (function(aluno){
    return aluno.nota >= 7;
})

console.log(alunosComNotasMaioresQueSete);