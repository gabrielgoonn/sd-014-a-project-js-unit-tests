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
   add: (a, b) => {
    let soma = a + b;
     return soma;
   },
   mult: (a, b) => {
     let mult = a * b;
     return mult;
   },
   div: (a, b) => {
     let div = a / b;
     return Math.floor(div);
   },
   sub: (a, b) => {
     let sub = a - b;
     return sub;
   },

};

module.exports = calculator;
