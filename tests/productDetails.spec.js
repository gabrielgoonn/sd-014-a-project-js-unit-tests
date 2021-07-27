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
    const answer = productDetails('produto1', 'produto2');
    const answer2 = productDetails('produto1', 'produto1');
    // Teste que o retorno da função é um array.
    assert.ok(Array.isArray(answer));
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(answer.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual([typeof answer[0], typeof answer[1]], ['object', 'object']);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(answer[0], answer[1]);
    assert.deepStrictEqual(answer2[0], answer2[1]);
    // Teste que os dois productIds terminam com 123.
    const regex = /123$/;
    assert(regex.test(answer[0].details.productId));
    assert(regex.test(answer[1].details.productId));
  });
});
