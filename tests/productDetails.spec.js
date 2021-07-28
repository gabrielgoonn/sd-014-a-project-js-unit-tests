const assert = require('assert');
const { type } = require('os');
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
    const array = productDetails('alface', 'bola');
    // Teste que o retorno da função é um array.
    // Verificar typeof array no link a seguir
    // https://stackoverflow.com/questions/12996871/why-does-typeof-array-with-objects-return-object-and-not-array
    assert.strictEqual(array instanceof Array, true, 'Retorno deve ser um array')
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(array.length, 2, 'Array deve conter 2 elementos')
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(array[0]), 'object', 'Elemento deve ser um objeto')
    assert.strictEqual(typeof(array[1]), 'object', 'Elemento deve ser um objeto')
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(array[0] !== array[1], true, 'Os objetos não podem ser iguais')
    // Teste que os dois productIds terminam com 123.
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    const idCheck = array.every((product) => product.details.productId.slice(-3) === '123');
    assert.strictEqual(idCheck, true)    
  });
});
