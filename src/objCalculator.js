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
const add = (n1, n2) => n1 + n2;
const mult = (n1, n2) => n1 * n2;
const div = (n1, n2) => Math.floor(n1 / n2);
const sub = (n1, n2) => n1 - n2;

calculator.add = add;
calculator.mult = mult;
calculator.div = div;
calculator.sub = sub;

// Função 'Math.floor() faz com que o valor decimal seja arredondado para o inteiro mais baixo'
// Informação encontrada no site https://www.w3schools.com/jsref/jsref_floor.asp

module.exports = calculator;
