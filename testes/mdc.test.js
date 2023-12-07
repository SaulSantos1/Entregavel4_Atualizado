const calcularMDC = require('../funcoes/mdc');

test('O valor tem que estar correto',() => {
    expect(calcularMDC(50,18)).toBe(2)
})
test('O valor tem que estar correto',() => {
    expect(calcularMDC(48,18)).toBe(6)
})