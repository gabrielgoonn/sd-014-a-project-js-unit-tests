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

const soma = (a, b) => a + b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => Math.floor(a / b);
const subtracao = (a, b) => a - b;
const calculator = {
  add: soma,
  mult: multiplicar,
  div: dividir,
  sub: subtracao,
};

module.exports = calculator;
