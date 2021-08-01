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
    const testArr = Array.isArray(productDetails());
    assert.deepStrictEqual(testArr, true, `O tipo é ${typeof productDetails()}, é esperado Array`);
    assert.deepStrictEqual(productDetails().length, 2, 'esperado: 2');
    assert.deepStrictEqual(typeof productDetails()[0], 'object');
    assert.deepStrictEqual(typeof productDetails()[1], 'object');
    assert.notDeepStrictEqual(productDetails('p', 's')[0], productDetails('p', 's')[1]);
    assert.deepStrictEqual(productDetails('primeiro', 'segundo')[0].details.productId, 'primeiro123');
    assert.deepStrictEqual(productDetails('primeiro', 'segundo')[1].details.productId, 'segundo123');
//     // assert.ok(productDetails(typeof productDetails()), Array)
//     // assert.ok(productDetails(productDetails().length),2)
//     // assert.ok(productDetails(typeof productDetails()[0]),Object)
//     // assert.ok(productDetails(typeof productDetails()[1]),Object)
//     // assert.notDeepStrictEqual(productDetails(productDetails()[0], productDetails()[1]))
//     // assert.ok(productDetails(productDetails('a')[0].details.productId, 'a123'))
//     // assert.ok(productDetails(productDetails('a')[1].details.productId, 'a123'))
//     // assert.fail();
//     // ESCREVA SEUS TESTES ABAIXO:
//     // Teste que o retorno da função é um array.
//     // Teste que o array retornado pela função contém dois itens dentro.
//     // Teste que os dois itens dentro do array retornado pela função são objetos.
//     // Teste que os dois objetos são diferentes entre si.
//     // Teste que os dois productIds terminam com 123.
  });
});
