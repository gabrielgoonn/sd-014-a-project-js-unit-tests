/*
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

const assert = require('assert');

const average = (n1, n2) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw undefined('ai n dá');
  } else if (n1 === 0 || n2 === 0) {
    throw undefined('aí n dá');
  } else {
    let media = (n1 + n2) / 2;
    return Math.round(media);
  }
};

assert.strictEqual(average(4, 3), 4);

module.exports = average;
