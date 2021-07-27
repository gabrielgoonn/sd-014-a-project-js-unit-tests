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
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // Teste que os dois productIds terminam com 123.

    //declarei const para fazer o typeof
    //Array.isArray(obj) https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray 

    const produto = productDetails('firstProduct', 'secondProduct');

    assert.strictEqual(Array.isArray(produto), true);
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    assert.strictEqual(typeof produto[0], 'object');
    assert.strictEqual(typeof produto[1], 'object');
    assert.notStrictEqual(produto[0], produto[1]);
    assert.strictEqual(produto[0].details.productId.endsWith('123'), true);
    assert.strictEqual(produto[1].details.productId.endsWith('123'), true);
  });
});
