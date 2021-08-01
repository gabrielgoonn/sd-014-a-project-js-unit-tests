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
    assert.strictEqual(Array.isArray(productDetails('alcool', 'mascara')), true); //para este requisito foi utilizado a propriedade Array.isArray conforme o site ww3 schools disponivel no link https://www.w3schools.com/jsref/jsref_isarray.asp seguindo a dica do colega Daniel Custódio.
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('alcool', 'mascara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    productDetails('alcool', 'mascara').forEach((test) => {
      assert.strictEqual(typeof test, 'object');
    });
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(productDetails('alcool', 'mascara')[0] !== productDetails('alcool', 'mascara')[1], true);
    // Teste que os dois productIds terminam com 123.
    productDetails('alcool', 'mascara').forEach((test) => {
      assert.strictEqual(test.details.productId.includes('123'), true);
    });

  });
});
