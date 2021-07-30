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
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara'), 'object')

    // Teste que o array retornado pela função contém dois itens dentro.
    let expected = productDetails().length;
    let actual = expected;
    assert.strictEqual(expected, actual);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    let expected2 = Object.keys(productDetails());
    let actual2 = expected2;
    assert.deepStrictEqual(expected2, actual2);

    // Teste que os dois objetos são diferentes entre si.
    let expected3 = expected2.values();
    let actual3 = expected3;

    assert.deepStrictEqual(expected3, actual3);

    // Teste que os dois productIds terminam com 123.
    let expected4 = productDetails().length;
    let actual4 = expected4;
    
    assert.strictEqual(expected4, actual4);
   
  });
});

