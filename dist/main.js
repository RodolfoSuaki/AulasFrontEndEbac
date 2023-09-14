class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    dizOla() {
        return `${this.nome} diz Olá`;
    }
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
const pessoa1 = new Pessoa("Pedro");
console.log(pessoa1.dizOla());
console.log(multiplicar(2, 5));
