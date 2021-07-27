/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempr
  e ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const add = (int1, int2) => int1 + int2;
const mult = (int1, int2) => int1 * int2;
const div = (int1, int2) => Math.floor(int1 / int2);
const sub = (int1, int2) => int1 - int2;

const calculator = { add, mult, div, sub };

module.exports = calculator;
