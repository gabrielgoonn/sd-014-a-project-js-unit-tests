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
/* Teste do array com base em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray */
describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    assert.strictEqual(Array.isArray(productDetails('Álcool gel', 'Máscara')), true); // Teste que o retorno da função é um array.
    assert.strictEqual(productDetails('Álcool gel', 'Máscara').length, 2); // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(typeof (productDetails('Álcool gel', 'Máscara')), 'object'); // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.notStrictEqual(productDetails('Álcool gel', 'Máscara'), true); // Teste que os dois objetos são diferentes entre si.
    const obj = productDetails('Álcool gel', 'Máscara'); // Teste que os dois productIds terminam com 123.
    assert.strictEqual(obj[0].details.productId.endsWith('123'), true);
    assert.strictEqual(obj[1].details.productId.endsWith('123'), true);
    /* Último teste feito com base em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith */  
  });
});
