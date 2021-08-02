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
    // // Fonte do instance of: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof
    assert.ok(productDetails() instanceof Array);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(productDetails()[0] instanceof Object, true);
    assert.strictEqual(productDetails()[1] instanceof Object, true);
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(productDetails()[0] !== productDetails()[1], true);
    // Teste que os dois productIds terminam com 123.
    // Fonte do substr(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
    assert.strictEqual(productDetails()[0].details.productId.substr(-3), '123');
    assert.strictEqual(productDetails()[1].details.productId.substr(-3), '123');
  });
});
