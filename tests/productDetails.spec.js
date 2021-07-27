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

    //Source: https://www.tutorialrepublic.com/faq/how-to-check-if-object-is-an-array-in-javascript.php#:~:text=Answer%3A%20Use%20the%20Array.,an%20array%3B%20otherwise%20returns%20false%20.
    assert.strictEqual(Array.isArray(productDetails('Sabão', 'Miojo')), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Salgadinho', 'Ovo').length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (productDetails('Cerveja', 'Vinho')[0]), 'object');
    assert.strictEqual(typeof (productDetails('Cerveja', 'Vinho')[1]), 'object');

    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('Cerveja', 'Vinho')[0], productDetails('Cerveja', 'Vinho')[1]);

    // Teste que os dois productIds terminam com 123.
    const firstProductId = productDetails('Bolacha', 'biscoito')[0].details.productId;
    const secondProductId = productDetails('Bolacha', 'biscoito')[1].details.productId;

    assert.strictEqual(firstProductId.slice(-3), '123');
    assert.strictEqual(secondProductId.slice(-3), '123');
  });
});
