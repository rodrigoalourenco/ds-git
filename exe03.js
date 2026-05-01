/**
 * Faça um programa que leia três números e exiba 
 * o maior entre eles.
 */

// const perguntar = require('./input.js')
import { perguntar } from './input.js';

async function main() {
    const number1 = await perguntar('Digite um numero?\n');
    const number2 = await perguntar('Digite outro numero?\n');
    const number3 = await perguntar('Digite mais um numero?\n');

    const answer = Math.max(number1, number2, number3);
    console.log(`O maior numero é ${answer}`);
}

main();