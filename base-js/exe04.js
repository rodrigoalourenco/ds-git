/**
 * Faça um programa que leia um vetor numérico de 10 
 * posições. Depois, ordene o vetor em ordem crescente 
 * e apresente os elementos ordenados
 */

import { perguntar } from './input.js';

async function main() {
    const numeros = [];

    for (let i = 0; i < 10; i++) {
        const resposta = await perguntar(`Digite o ${i + 1}º número: `);
        numeros.push(Number(resposta));
    }

    numeros.sort((a, b) => a - b);

    console.log('\nVetor ordenado:');
    console.log(numeros);

    console.log('\nElementos do vetor:');
    numeros.forEach((n) => console.log(n));
    
}

main();