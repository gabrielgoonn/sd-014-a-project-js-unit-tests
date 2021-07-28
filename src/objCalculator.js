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

const calculator = {};
const sum = (num1, num2) => (num1 + num2);
const vezes = (num1, num2) => (num1 * num2);
const less = (num1, num2) => (num1 - num2);
const share = (num1, num2) => Math.floor(num1 / num2);

calculator.add = sum;
calculator.mult = vezes;
calculator.sub = less;
calculator.div = share;

// console.log(calculator.div(3, 2));
module.exports = calculator;

// referencia de arredondamento para baixo Math.floor https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor