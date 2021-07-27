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

const average = (numbers) => {
  let soma = 0;

  //  Verifica se o valor passado é um numero finito;
  if (!numbers.every(Number.isFinite) || numbers.length === 0) {
    return undefined;
  }

  for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
  }
  //  Função que arredonda para o numero inteiro mais proximo;
  return Math.round(soma / numbers.length);
};

console.log(average([0, 0, 0, 0, 0, 0, 1]));

module.exports = average;

//  Soluções encontradas nos seguintes sites;
//  (https://mzl.la/3eXSkvB);
//  (https://www.w3schools.com/jsref/jsref_round.asp);