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
  // inicializa a variavel para somar os valores de cada indice do array
  let soma = 0;
  // verifica se o array está vazio ou se tme pelo menos dois numeros
  if (array.length === 0 || array.length < 2) {
    return undefined;
  }
  for (let index = 0; index < array.length; index += 1) {
    soma += array[index];
    // verifica se o tipo de cada valor é um número e se o array não está vazio
    if (typeof (array[index]) !== 'number') {
      return undefined;
    }
  }
  // retorna a soma dos numeros dividido pela quantida de indices e arredonda para cima ou para baixo
  return Math.round(soma / array.length);
};
// console.log(average([-11, 2, 5]));
module.exports = average;