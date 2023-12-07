const contagem = require('../funcoes/fibonacci');

test('Os 10 primeiros números da contagem fibonacci devem ser corretos', () => {
  expect(contagem(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('Os 4 primeiros números da contagem contagem devem ser corretos', () => {
  expect(contagem(4)).toMatchObject([0, 1, 1, 2]);
});