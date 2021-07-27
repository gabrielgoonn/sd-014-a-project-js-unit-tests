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

const average = (array) => {
  let summation = 0;
  let numberOfItems = array.length;

  // Se o array estiver vazio retorna underfined;
  if (numberOfItems === 0) {
    return undefined;
  }
  // Somátorio dos numeros do array:
  for (let index = 0; index < array.length; index += 1) {
    // Se algum item no array for diferente de number retorna undefined;
    if (typeof array[index] !== 'number') {
      return undefined;
    }
    // Somatório de todos os numeros do array;
    summation += array[index];
  }
  // Média do somatório e aredondamento;
  let averageValue = Math.round(summation / numberOfItems);

  return averageValue;
};

average([2, 2]);
average([1, 1]);
average([1, '2']);

module.exports = average;
