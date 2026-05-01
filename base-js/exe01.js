/**
 * Escreva um programa que, recebendo qualquer numero 
 * inteiro positivo, devolva a soma dos sues dígitos. 
 * Ex.: se o numero for 1234, o programa devera 
 * devolver 10 (1+2+3+4)
 */

import readLine from 'readline';

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
//rodrigo
rl.question('Digite um numero inteiro positivo: ', 
    (answer) => {
    let soma = 0;
    for(let i = 0; i < answer.length; i++){
        //soma += parseInt(answer[i]);
        soma += parseInt(answer.charAt(i));
    }
    console.log(`A soma do número ${answer} é ${soma}`);
    rl.close();
})