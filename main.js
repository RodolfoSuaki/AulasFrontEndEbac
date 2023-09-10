//funcionário
//pessoa
//conta


function Funcionario (nome, cargo, setor, conta, agencia){
    this.cargo = cargo;
    this.setor = setor;

    Pessoa.call(this, nome);
    Banco.call(this, conta);
    Banco.call(this, agencia);
}

function Pessoa (nome, altura, peso, tipoSanguineo){
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
    this.tipoSanguineo = tipoSanguineo;

    this.dizSangue = function() {
        console.log("Meu tipo sanguineo é " + this.tipoSanguineo);
    }
}

function Banco (nome, conta, agencia){
    this.conta = conta;
    this.agencia = agencia;

    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Roberto", "Desenvolvedor Senior", "Marketing", "1420");
const pessoa1 = new Pessoa("Roberto", "180cm", "80kg", "A+");
const banco1 = new Banco("Roberto", "1420", "310-1");

console.log(funcionario1);
console.log(banco1);
console.log(pessoa1);
pessoa1.dizSangue();