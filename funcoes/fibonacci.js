function fibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      var fibArray = [0, 1];
      for (var i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
      }
      return fibArray;
    }
  }
  
  // Exemplo: Gerar os primeiros 10 números da sequência de Fibonacci
  var resultado = fibonacci(10);
  console.log(resultado);
  

module.exports = fibonacci;