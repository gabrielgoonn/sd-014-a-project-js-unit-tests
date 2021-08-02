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

const soma = (param1, param2) => param1 + param2;
const multiplicacao = (param1, param2) => param1 * param2;
const divicao = (param1, param2) => Math.floor(param1 / param2); 
const subtracao = (param1, param2) => param1 - param2;

const calculator = {
  add: soma,
  mult: multiplicacao,
  div: divicao,
  sub: subtracao,
};

console.log(calculator.add(1, 3));

module.exports = calculator;