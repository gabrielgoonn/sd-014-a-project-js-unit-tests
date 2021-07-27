const assert = require('assert');
const { type } = require('os');
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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(typeof productDetails('produto1', 'produto2'), 'object');

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(Object.keys(productDetails('p1', 'p2')).length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof (Object.keys(productDetails('p1', 'p2').length)), 'object');

    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(Object.values(productDetails('p1','p2')), true);

    // Teste que os dois productIds terminam com 123.
    // [0] = p1; [1] = p2;
    assert.deepStrictEqual(productDetails('p1','p2')[0].details.productId.slice(-3), '123');
    assert.deepStrictEqual(productDetails('p1','p2')[1].details.productId.slice(-3), '123');

  });
});
