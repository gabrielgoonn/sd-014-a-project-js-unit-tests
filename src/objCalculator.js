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
const verify = (ver1, ver2) => (ver1 % 1 !== 0 ? false : ver2 % 1 === 0);
const string = 'Use valores inteiros.';
const calculator = {
  add: (num1, num2) => (verify(num1, num2) ? num1 + num2 : string),
  mult: (num1, num2) => (verify(num1, num2) ? num1 * num2 : string),
  div: (num1, num2) => (verify(num1, num2) ? Math.floor(num1 / num2) : string),
  sub: (num1, num2) => (verify(num1, num2) ? num1 - num2 : string),
};
module.exports = calculator;
