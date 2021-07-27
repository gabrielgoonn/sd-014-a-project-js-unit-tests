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
const average = (num) => {
  let valor = 0;
  if (num.length === 0) {
    return undefined;
  }
  for (let x = 0; x < num.length; x += 1) {
    if (typeof (num[x]) !== 'number') {
      return undefined;
    }
      valor += num[x];
  }
  valor = Math.round(valor / num.length);
  return valor;
};
module.exports = average;
