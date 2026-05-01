import readline from 'readline';

export function perguntar(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(pergunta, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}