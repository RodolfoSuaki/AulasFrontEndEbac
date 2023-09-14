class Pessoa {
    nome: string;

    constructor (nome: string) {
        this.nome = nome;
    }


    dizOla(): string {
        return `${this.nome} diz Olá`;
    }

}

function multiplicar (num1: number, num2: number){
    return num1 * num2;
}

const pessoa1 = new Pessoa ("Pedro");

console.log(pessoa1.dizOla());
console.log(multiplicar(2, 5));