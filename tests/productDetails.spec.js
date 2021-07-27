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

describe('6 - Implemente os casos de ok para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS okS ABAIXO:
    let ok = productDetails('Alcool gel', 'Máscara');
    // ok que o retorno da função é um array.
    assert.strictEqual(typeof productDetails(), 'object');
    // ok que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // ok que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof ok[0], 'object');
    assert.strictEqual(typeof ok[1], 'object');
    // ok que os dois objetos são diferentes entre si.
    assert.notStrictEqual(ok[0], ok[1]);
    // ok que os dois productIds terminam com 123.
    assert.strictEqual(ok[0].details.productId.substr(ok[0].details.productId.length - 3), '123');
    assert.strictEqual(ok[1].details.productId.substr(ok[1].details.productId.length - 3), '123');
  });
});
