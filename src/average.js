/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arr) => {
  // Verifica no array se existe um elemento com tipo diferente de 'number'. Caso isso aconteça ou o array esteja vazio retorna nulo
  // caso contrário retorna o resultado esperado da função average
  if (!arr.every((element) => typeof (element) === 'number') || arr.length === 0) return undefined; 
  return Math.round(arr.reduce((a, b) => a + b) / arr.length);
};

module.exports = average;
