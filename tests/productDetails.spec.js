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

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(Array.isArray(productDetails('first', 'second')), true, 'O valor retornado deve ser um array');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('first', 'second').length, 2, 'Deve haver apenas dois objetos dentro do array!');
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('first', 'second')[0], 'object', 'O primeiro item do array deve ser um objeto!');
    assert.deepStrictEqual(typeof productDetails('first', 'second')[1], 'object', 
    'O segundo item do array deve ser um objeto!');
    // Teste que os dois objetos são diferentes entre si.
    const firstObject = Object.values((productDetails('first', 'second')[0]));
    const secondObject = Object.values((productDetails('first', 'second')[1]));
    assert.notDeepStrictEqual(firstObject, secondObject, 'Os objetos retornados não podem ser iguais!');
    // Teste que os dois productIds terminam com 123.
    const firstProductId = productDetails('1', '2')[0].details.productId.slice(-3);
    const secondProductId = productDetails('1', '2')[1].details.productId.slice(-3);
    assert.ok(firstProductId === '123', 'O primeiro productId deve terminar em "123"');
    assert.ok(secondProductId === '123', 'O primeiro productId deve terminar em "123"');
  });
});

// Métodos utilizados:

// Array.isArray(valor): Verifica se o valor inserido é um array
// Pode ser encontrado em: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

// .slice() : Retorna uma porção de um array (objeto) em um novo array.
// Pode ser encontrado em: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice