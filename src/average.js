const assert = require('assert');
/*
starting....
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
  // vamos declarar uma função com um array como parâmetro.
const average = (array) => {
  if (array.length === 0) {
     // se o array for vazio retorna undefined
    return undefined;
  }
  let sum = 0;
  for (const number of array) {
  // percorre array para testarmos se os elementos são de fato números.
    if (typeof number === 'number') {
      sum += number;
    } else {
      return undefined;
    }
  }
  return Math.round(sum / array.length);
};

// assert.strictEqual(expected, 2);
// assert.strictEqual(expected, 1);
// fontes:
// https://onecompiler.com/posts/3vyd4sbdq/finding-the-average-value-of-an-array-in-javascript-using-arrow-functions
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// idéia dos colegas da trybe

module.exports = average;
