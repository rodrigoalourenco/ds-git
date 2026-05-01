/**
 * Crie um objeto pessoa com nome e uma função 
 * saudar que exibe "Olá, meu nome é [nome]".
 */

const pessoa = {
    nome: "Rodrigo",
    saudar() {
        //console.log('Olá, meu nome é ' + this.nome);
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};

pessoa.saudar();