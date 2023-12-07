const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function receberEntrada(mensagem, callback) {
    rl.question(mensagem, callback);
}

function contarNumerosNoIntervalo(N, primeiroNumero, dadosInput) {
    const dados = dadosInput.split(' ').map(Number);
    let count = 0;

    for (let i = 0; i < N; i++) {
        const numero = dados[i];
        if (numero >= primeiroNumero && numero <= N) {
            count++;
        }
    }

    return count;
}

function exibirResultado(count) {
    console.log(`Quantidade de números no intervalo: ${count}`);
    rl.close();
}

function main() {
    receberEntrada('Digite o valor de N: ', (N) => {
        receberEntrada('Digite o primeiro número: ', (primeiroNumero) => {
            receberEntrada('Digite o conjunto de dados separado por espaços: ', (dadosInput) => {
                const count = contarNumerosNoIntervalo(N, primeiroNumero, dadosInput);
                exibirResultado(count);
            });
        });
    });
}

// Chama a função principal
main();
