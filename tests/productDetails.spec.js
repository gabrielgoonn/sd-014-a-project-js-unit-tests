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
    const array = productDetails('Alcool Gel', 'Máscara');
    assert.strictEqual(array instanceof Array, true);
    // Teste que o array retornado pela função contém dois itens dentro.
    const array1 = productDetails('Alcool Gel', 'Máscara').length;
    assert.strictEqual(array1, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const objeto = Object.entries(productDetails('Alcool Gel', 'Máscara'));
      assert.strictEqual(typeof objeto[0], 'object');
      assert.strictEqual(typeof objeto[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(objeto[0], objeto[1]);
    // Teste que os dois productIds terminam com 123.
    const objetoValue = Object.values(productDetails('Alcool Gel', 'Máscara'));
    for (let index = 0; index < objetoValue.length; index += 1) {
      const product = objetoValue[index].details.productId.slice(-3);
      assert.strictEqual(product, '123');
    }
  });
});
