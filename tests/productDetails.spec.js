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
    const arrayProdutos = productDetails('Alcool', 'Suco');
    const produto1 = arrayProdutos[0];
    const produto2 = arrayProdutos[1];
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
        //O método Array.isArray() retorna true se um objeto é uma array, e false se não é.
    assert.strictEqual(Array.isArray(arrayProdutos), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(arrayProdutos.length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    for (let i = 0; i < arrayProdutos.length; i += 1) {
      assert.strictEqual(typeof arrayProdutos[i], 'object');
    }
    // assert.strictEqual(typeof produto1, 'object');
    // assert.strictEqual(typeof produto2, 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(produto1, produto2);
    // Teste que os dois productIds terminam com 123.
    for (let i = 0; i < arrayProdutos.length; i += 1) {
      assert.strictEqual(arrayProdutos[i].details.productId, `${arrayProdutos[i].name}123`);
    }
    // assert.strictEqual(produto1.details.productId, 'Alcool123');
    // assert.strictEqual(produto2.details.productId, 'Suco123');
  });
});