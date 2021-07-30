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
 const param1 = 'Alcool gel'
 const param2 = 'Máscara'
 const arrayRetornado = productDetails(param1, param2);
 const product1 = arrayRetornado[0];
 const product2 = arrayRetornado[1];

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(arrayRetornado), true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(arrayRetornado.length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof product1 , 'object')
    assert.strictEqual(typeof product2 , 'object')
    // Teste que os dois objetos são diferentes entre si.
    assert.ok(product1 !== product2)
    // Teste que os dois productIds terminam com 123.
    // Obrigrado Jonathan e Danilo
    assert.strictEqual(product1.details.productId,`${param1}123`)
    assert.strictEqual(product2.details.productId,`${param2}123`)
  },);
});
