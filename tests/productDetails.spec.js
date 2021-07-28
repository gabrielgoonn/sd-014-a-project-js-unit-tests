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
    // Teste que o retorno da função é um array.
    const myArray = productDetails('Alcool gel', 'Máscara');
    assert.ok(Array.isArray(myArray)); // Use Array.isArray to differentiate objects from arrays
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(myArray.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.ok(typeof myArray[0] === 'object' && typeof myArray[1] === 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(myArray[0], myArray[1]);
    // Teste que os dois productIds terminam com 123.
    assert.ok(myArray[0].details.productId.endsWith('123') && myArray[1].details.productId.endsWith('123'));
  });
});
