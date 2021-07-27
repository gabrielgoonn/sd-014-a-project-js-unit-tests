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
    const retorno = productDetails('Água','Limão');
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(Array.isArray(retorno), true);
    // Referencia <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray>
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(retorno.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof retorno[0], 'object'); // primeiro retorno
    assert.deepStrictEqual(typeof retorno[1], 'object'); // segundo retorno
    // Teste que os dois objetos são diferentes entre si.
    assert.ok(retorno[0] !== retorno[1], false);
    // Teste que os dois productIds terminam com 123. // slice(depois do indice) pega Depois desse indice.
    assert.ok(retorno[0].details.productId.slice(retorno[0].details.productId.length -3) === '123', true);
    assert.ok(retorno[1].details.productId.slice(retorno[1].details.productId.length -3) === '123', true);
  });
});
