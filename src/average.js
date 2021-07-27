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
//  https://www.w3schools.com/jsref/jsref_tofixed.asp
//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
const average = (array) => {
  let media = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let i = 0; i < array.length; i += 1) {
    const type = typeof array[i];
    if (type !== 'number') {
      return undefined;
    }
    media += array[i];
  }
  media = parseInt((media / array.length).toFixed(0), 10);
  return media;
};
console.log(average([-11, -5, 2]));

module.exports = average;
