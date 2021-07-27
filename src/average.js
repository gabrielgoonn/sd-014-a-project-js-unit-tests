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
  if (array === undefined || array.length === 0) { // undefined representa um valor indefinido(caso sem parâmetro) ou array vazio [0 elementos]
    return undefined;
  }
  let total = 0;
  for (let index of array) {
    if (typeof index !== 'number') { // preciso verificar cada index pra vê se é number. Poderia ser usado (!Number.isFinite(index)) ao invés de typeof. O método Number.isFinite() determina se o valor passado é um número finito. 
      return undefined; 
    }
    total += index;
  }
  return Math.round(total / array.length); // A função Math.round() retorna o valor de um número arredondado para o inteiro mais proximo (cumprindo ao requisito de que todo os resultados devem ser arredondados para valores inteiros)
};
// A Média Aritmética de um conjunto de dados é obtida somando todos os valores e dividindo o valor encontrado pelo número de dados desse conjunto.
module.exports = average;