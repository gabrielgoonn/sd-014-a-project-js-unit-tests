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
    assert.ok(productDetails('Alcool gel', 'Máscara') instanceof Array);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara').length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const item1 = productDetails('Alcool gel', 'Mascara')[0];
    const item2 = productDetails('Alcool gel', 'Mascara')[1];
    assert.strictEqual(typeof item1, 'object');
    assert.strictEqual(typeof item2, 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(item1, item2);
    // Teste que os dois productIds terminam com 123.
    const firstProductId = item1.details.productId;
    const secondProductId = item2.details.productId;
    const last3Characters_firstProductId = firstProductId.substring(firstProductId.length - 3);
    const last3Characters_secondProductId = secondProductId.substring(secondProductId.length - 3);
    assert.strictEqual(last3Characters_firstProductId, '123');
    assert.strictEqual(last3Characters_secondProductId, '123');
  });
});
