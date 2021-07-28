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
    // Inspiração: https://stackoverflow.com/questions/4775722/how-to-check-if-an-object-is-an-array
    const test = productDetails('oi', 'oei');
    assert.ok(Array.isArray(test), 'productDetails deve retornar uma array');

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(test.length, 2, 'o array de productDetails deve ter dois itens');

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const [item1, item2] = test;
    assert.ok(typeof item1 === 'object' && typeof item2 === 'object', 'os dois itens retornados por productDetails precisam ser objetos');

    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(item1, item2, 'os dois itens retornados por productDetails não podem ser iguais');

    // Teste que os dois productIds terminam com 123.
    const terminaCom123 = (item) => item.details.productId.match(/123$/) !== null;
    assert.ok(terminaCom123(item1) && terminaCom123(item2), 'as ids dos produtos retornados por productDetails precisam terminar com 123');
  });
});