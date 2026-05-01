/**
 * Faça um programa que leia um número e verifique se ele
 *  é par ou ímpar. Exiba uma mensagem indicando o 
 * resultado.
 */

import readLine from 'readline';

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um numero?\n', (answer) => {
    if (answer % 2 === 0) {
        console.log(`O numero ${answer} é par!`);
    } else {
        console.log(`O numero ${answer} é impar!`);
    }
    rl.close();
})