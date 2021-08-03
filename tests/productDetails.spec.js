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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara'), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    productDetails('alcool', 'mascara').forEach((test) => {
      assert.strictEqual(typeof test, 'object');
    });
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(Object.values(productDetails('Alcool gel', 'Máscara'))[0], Object.values(productDetails('Alcool gel', 'Máscara'))[1])
    // Teste que os dois productIds terminam com 123.
    productDetails('alcool', 'mascara').forEach((test) => {
      assert.strictEqual(test.details.productId.includes('123'), true);
    });
    // referencia do site https://www.w3schools.com/nodejs/ref_assert.asp na parte Assert Methods
  });
});
