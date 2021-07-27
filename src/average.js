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

// Iniciando novo projeto.

const average = (array) => {
  let sumValues = 0;
  // verifica se o array não é vazio.
  if (array.length === 0) {
    return undefined;
  }
  for (let i = 0; i < array.length; i += 1) {
    // verifica se o tipo do array[i] é um número.
    if (typeof (array[i]) !== 'number') {
      return undefined;
    }
    sumValues += array[i];
  }
  return Math.round(sumValues / array.length);
};

// testes.
// const ex1 = [1];
// const ex2 = [1, 2, 3, 4, 5];
// const output = average(ex1);
// console.log(output);
module.exports = average;