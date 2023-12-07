
function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

const numero = 17; // Substitua pelo número que deseja verificar
if (ehPrimo(numero)) {
    console.log(numero + " é primo.");
} else {
    console.log(numero + " não é primo.");
}

module.exports = ehPrimo;