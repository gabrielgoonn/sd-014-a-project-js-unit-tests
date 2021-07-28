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

const average = (array) => {
  let sum = 0;
  if(array.length === 0) return undefined;
  for (let num in array) {
    if (typeof array[num] != 'number') return undefined;
    sum += array[num];
  }
  const media = sum / array.length;
  const mediaP = Math.round(media);
  const mediaN = Math.round(Math.abs(media));
  if(media < 0){
    return -mediaN;
  }else{
    return mediaP;
  }
};

module.exports = average;
