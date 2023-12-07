const assert = require('assert');
const ehPrimo = require('../funcoes/Primo');

describe('Testes para a função ehPrimo', function () {
    it('Deve retornar true para números primos', function () {
        assert.strictEqual(ehPrimo(2), true);
        assert.strictEqual(ehPrimo(3), true);
        assert.strictEqual(ehPrimo(17), true);
        // Adicione mais casos de teste com números primos
    });

    it('Deve retornar false para números não primos', function () {
        assert.strictEqual(ehPrimo(4), false);
        assert.strictEqual(ehPrimo(6), false);
        assert.strictEqual(ehPrimo(15), false);
        // Adicione mais casos de teste com números não primos
    });
});