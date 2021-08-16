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

const average = (array) => ((!array.every(Number.isFinite) || array.length === 0) 
  ? undefined
  : Math.round(array.reduce((total, number) => total + number) / array.length));
console.log(average([]));
module.exports = average;
// Para uma string vazia, o método every retorna TRUE, por isso array.length === 0 COM a negação "!" do every.
// isNan retorna um valor MESMO que seja uma string com numeros, contudo, isFinite retorna somente um valor numérico.
// Sem a negação do método every (!), o retorno da função será NaN, pois um vetor vazio passará no teste Number.isFinite
// em conjunto com o método every.
