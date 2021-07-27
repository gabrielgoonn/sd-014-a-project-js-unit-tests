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
    let copy = productDetails('Alcool gel', 'Máscara');

    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof copy, 'object');

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(copy.length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof copy[0], 'object');
    assert.strictEqual(typeof copy[1], 'object');

    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(copy[0], copy[1]);

    // Teste que os dois productIds terminam com 123.
    assert.strictEqual(copy[0].details.productId.substr(copy[0].details.productId.length - 3), '123');
    assert.strictEqual(copy[1].details.productId.substr(copy[1].details.productId.length - 3), '123');
  });
});
