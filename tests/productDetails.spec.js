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
    assert.strictEqual(Array.isArray(productDetails('alcool', 'sabonete')), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.keys(productDetails('alcool', 'sabonete')).length, 2);
    
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const objects = Object.values(productDetails('alcool', 'sabonete'));
    const isObjects = objects.every((element)=> typeof(element) === 'object');
    assert.strictEqual(isObjects, true);
    
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(objects[0], objects[1]);

    // Teste que os dois productIds terminam com 123.
    const productdIds = [objects[0].details.productId, objects[1].details.productId];
    const testString = '123';
    const testIncludesString = productdIds.every((element) => element.includes(testString));
    assert.strictEqual(testIncludesString, true);
  });
});
