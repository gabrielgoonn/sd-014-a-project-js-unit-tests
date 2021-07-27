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
    let condition1 = typeof (productDetails('mascara', 'alcool')[0]);

    let condition2 = typeof (productDetails('mascara', 'alcool')[1]);

    let obj1 = productDetails('mascara', 'alcool')[0];

    let obj2 = productDetails('mascara', 'alcool')[1];

    let obj1Test = obj1.details.productId.includes('123');
    let obj2Test = obj2.details.productId.includes('123');
    assert.deepStrictEqual(typeof (productDetails()), 'object');
    assert.deepStrictEqual(productDetails('mascara', 'alcool').length, 2);
    assert.deepStrictEqual(condition1 && condition2, 'object');
    assert.notDeepStrictEqual(obj1, obj2);
    assert.deepStrictEqual(obj1Test, obj2Test);
  });
});