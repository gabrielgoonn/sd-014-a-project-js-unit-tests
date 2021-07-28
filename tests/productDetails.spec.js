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
    const produtos = productDetails('luva', 'máscara');
    assert.strictEqual(Array.isArray(produtos), true);
    assert.strictEqual(produtos.length, 2);
    assert.strictEqual(typeof (produtos[0]), 'object');
    assert.strictEqual(typeof (produtos[1]), 'object');
    assert.notStrictEqual((produtos[0]), (produtos[1]));
    const produto1 = produtos[0].details.productId;
    const produto2 = produtos[1].details.productId;
    assert.deepStrictEqual(produto1.substr(produto1.length - 3), '123');
    assert.deepStrictEqual(produto2.substr(produto2.length - 3), '123');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // Teste que os dois productIds terminam com 123.
  });
});
