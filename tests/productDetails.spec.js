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
    //assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const result = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(result), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(result.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const object1 = result[0];
    const object2 = result[1];
    assert.strictEqual(typeof object1, 'object');
    assert.strictEqual(typeof object2, 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(object1, object2);
    // Teste que os dois productIds terminam com 123.
    const string1 = object1.details.productId;
    const string2 = object2.details.productId;
    assert.strictEqual(string1.substring(string1.length - 3, string1.length), string2.substring(string2.length - 3, string2.length));
  });
});
