const assert = require('assert');
const productDetails = require('../src/productDetails');


/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

const teste = (arr) => {
  let arrTypes = [];
  for (let item of arr) {
    arrTypes.push(typeof item);
  }

  return arrTypes;
};

const capturePattern = (arr) => {
  let arrOfPatterns = [];
  for (let i = 0; i < arr.length; i += 1) {
    arrOfPatterns.push(arr[i].details.productId.slice(-3));
  }

  return arrOfPatterns;
};

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara'), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(teste(productDetails('Alcool gel', 'Máscara')), ['object', 'object']);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(Object.values(productDetails('Alcool gel', 'Máscara'))[0], Object.values(productDetails('Alcool gel', 'Máscara'))[1])
    // Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(capturePattern(productDetails('Alcool gel', 'Máscara')), ['123', '123']);
  });
});

