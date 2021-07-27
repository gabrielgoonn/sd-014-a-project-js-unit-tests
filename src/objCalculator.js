/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  add: function (...nums) {
    let result = 0;
    for (let num of nums) {
      result += num;
    }
    return result;
  },
  mult: function (...nums) {
    let result;
    for (let num of nums) {
      result? result = num * result : result = num;
    }
    return result;
  },
  div: function (num1, num2) {
    return Math.floor(num1/num2);
  },
  sub: function (num1, num2) {
    return num1 - num2;
  }
};

module.exports = calculator;
