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
    const product = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(product), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.keys(product).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const isObject = (array) => (typeof array) === 'object';
    assert.strictEqual(product.every(isObject), true);
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(product[0] !== product[1], true);
    // Teste que os dois productIds terminam com 123.
    const end = (array) => array.details.productId.endsWith('123');
    assert.strictEqual(product.every(end), true);
  });
});
