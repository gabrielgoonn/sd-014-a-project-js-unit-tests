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

// Criando a função, passando um array como parametro e fazendo trativa de erro se o tamanho do array for 0 retorna undefined
const average = (array) => {
  let ResultadoTotalSoma = 0;
  if (array.length === 0) {
    return undefined;
  }

// fazendo um loop com o tamanho do array e a soma total que tem dentro de cada array, e fazendo uma tratativa de erro se for diferente de numero retorna undefined;
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
      return undefined;
    }
    ResultadoTotalSoma += array[index];
  }

  // Colocando a media da soma total que tem dentro do array divido pelo tamanho total de cada numero dentro do array e a arrendondando para inteiro com a função Math.round.
  // Referência w3schools: https://www.w3schools.com/jsref/jsref_round.asp
  let media = Math.round(ResultadoTotalSoma / array.length);
  return (media);
};

module.exports = average;
