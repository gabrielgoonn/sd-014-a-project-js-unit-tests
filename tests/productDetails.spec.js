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
    // isArray: verifica se a função é ou não um array.
    // Referência: w3schools https://www.w3schools.com/jsref/jsref_isarray.asp 
    // assert.strictEqual(Array.isArray(productDetails()), true);
    // assert.strictEqual(productDetails('Alcool gel', 'Mascara').length, 2);
    // assert.strictEqual(typeof productDetails('Alcool gel', 'Mascara'), 'object');
    // assert.notDeepStrictEqual(productDetails('Alcool gel', 'Máscara')[0], productDetails('Alcool gel', 'Mascara')[1]);
    // Referência: w3schools https://www.w3schools.com/jsref/jsref_every.asp
    // Referência: w3schools https://www.w3schools.com/jsref/jsref_substr.asp
    // assert.strictEqual(productDetails.every((item) => {
    //   item.details.productId.substr(-3) }), true);
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // Teste que os dois productIds terminam com 123.
  });
});
