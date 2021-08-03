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
    assert.ok(Array.isArray(productDetails()), 'O retorno da função é um array');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.ok(productDetails().length === 2, "O array tem 02 itens dentro.");
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.ok(typeof productDetails()[0] && typeof productDetails()[1] === 'object', "os dois itens são objetos.")
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(!productDetails()[0], !productDetails()[1], 'os objetos são diferentes entre si');
    // Teste que os dois productIds terminam com 123.
    assert.ok(productDetails()[0].details.productId.endsWith('123') && productDetails()[1].details.productId.endsWith('123'), 'ambos terminam com 123.');
  });
});
