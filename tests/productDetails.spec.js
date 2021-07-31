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
    assert.strictEqual(Array.isArray(productDetails()), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const typeCheck = (productList) => {
      return productList.every((product) => 
        typeof product === 'object'
      )
    };
    assert.strictEqual(typeCheck(productDetails()), true);

    // Teste que os dois objetos são diferentes entre si.
    const differentElement = (productList) => {
      if (productList[0].name === productList[1].name) {
        return false;
      } 
      return true;
    }
    
    const newProductList = productDetails('Máscara', 'Álcool Gel');
    assert.strictEqual(differentElement(newProductList), true);

    // Teste que os dois productIds terminam com 123.
    const endCheck = (productList) => productList.every((product) => product.details.productId.endsWith('123'));
    assert.strictEqual(endCheck(newProductList), true);
  });
});
