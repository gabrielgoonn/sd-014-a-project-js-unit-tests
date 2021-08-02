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
    const array = Array.isArray(productDetails());
    assert.strictEqual(array, true);
    // Teste que o array retornado pela função contém dois itens dentro.
    const itens = Object.entries(productDetails()).length;
    assert.strictEqual(itens, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const object = Object.entries(productDetails());
    assert.strictEqual(typeof object, 'object');
    // Teste que os dois objetos são diferentes entre si.
    const objeto = Object.values(productDetails('a', 'b'));
    const obj1 = objeto[0]
    const obj2 = objeto[1]
    assert.notDeepStrictEqual(obj1, obj2);
    // Teste que os dois productIds terminam com 123.
    const name1 = productDetails()[0].details.productId.slice(-3);
    const name2 = productDetails()[1].details.productId.slice(-3);
    assert.strictEqual(name1, '123');
    assert.strictEqual(name2, '123');
  });
});
