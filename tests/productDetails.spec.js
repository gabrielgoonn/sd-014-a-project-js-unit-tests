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
    const produtos = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(typeof productDetails, 'function');
    assert.strictEqual(typeof produtos, 'object');
    assert.strictEqual(produtos.length, 2);
    assert.strictEqual(produtos[0].name,'Alcool gel');
    assert.strictEqual(produtos[1].name,'Máscara');
    assert.notDeepStrictEqual(produtos[1].name,produtos[0].name,);
    assert.deepStrictEqual(produtos[0].details,{productId: 'Alcool gel123'});
    assert.deepStrictEqual(produtos[1].details,{productId: 'Máscara123'});

    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // Teste que os dois productIds terminam com 123.
  });
});
