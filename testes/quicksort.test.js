const assert = require('assert');
const quickSort = require('../funcoes/quicksort');

describe('Testes para a função quickSort', function () {
    it('Deve ordenar corretamente um array não ordenado', function () {
        const array = [64, 25, 12, 22, 11];
        const expectedSortedArray = [11, 12, 22, 25, 64];
        const sortedArray = quickSort(array);
        assert.deepStrictEqual(sortedArray, expectedSortedArray);
    });

    it('Deve lidar corretamente com um array já ordenado', function () {
        const array = [5, 10, 15, 20, 25];
        const expectedSortedArray = [5, 10, 15, 20, 25];
        const sortedArray = quickSort(array);
        assert.deepStrictEqual(sortedArray, expectedSortedArray);
    });
});
