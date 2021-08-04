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
    // https://pt.stackoverflow.com/questions/77190/como-saber-se-um-objeto-%C3%A9-um-array-em-javascript-sem-jquery
    assert.strictEqual(Array.isArray(productDetails()), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (productDetails()), 'object');
    // Teste que os dois objetos são diferentes entre si. Refiz o código otimizado. Special thanks a Monnylly - T14A (Peguei o código dela)
    // assert.notStrictEqual(productDetails('Alcool Gel', 'Máscara')[0], productDetails ('Alcool Gel', 'Máscara')[1]);
    assert.notStrictEqual(Object.entries(productDetails()[0]), Object.entries(productDetails()[1]));
    // Teste que os dois productIds terminam com 123.
    // endsWith em https://www.devmedia.com.br/java-string-manipulando-metodos-da-classe-string/29862
    assert.ok(productDetails()[0].details.productId.endsWith('123'));
    assert.ok(productDetails()[1].details.productId.endsWith('123'));
  });
});
