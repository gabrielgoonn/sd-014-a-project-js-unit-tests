/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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
*/
const assert = require('assert');

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];
const testArr = Array.isArray(productDetails());
assert.deepStrictEqual(testArr, true, `O tipo é ${typeof productDetails()}, é esperado Array`);
assert.deepStrictEqual(productDetails().length, 2, 'esperado: 2');
assert.deepStrictEqual(typeof productDetails()[0], 'object');
assert.deepStrictEqual(typeof productDetails()[1], 'object');
assert.notDeepStrictEqual(productDetails('p', 's')[0], productDetails('p', 's')[1]);
assert.deepStrictEqual(productDetails('primeiro', 'segundo')[0].details.productId, 'primeiro123');
assert.deepStrictEqual(productDetails('primeiro', 'segundo')[1].details.productId, 'segundo123');

module.exports = productDetails;
