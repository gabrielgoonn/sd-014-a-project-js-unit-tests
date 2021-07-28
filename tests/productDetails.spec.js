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
    const expected = productDetails('Alcool gel', 'Máscara');
    const objOne = Object.values(expected)[0];
    const objTwo = Object.values(expected)[1];
    const finalOne = expected[0].details.productId.slice(-3);//o slice negativo retorna os ultimos caracteres de acordo com o valor passado
    const finalTwo = expected[1].details.productId.slice(-3);//o slice negativo retorna os ultimos caracteres de acordo com o valor passado
    
    // ESCREVA SEUS TESTES ABAIXO:
    assert(Array.isArray(expected));// Teste que o retorno da função é um array.
    //Array.isArray(obj) faz a verificação se o objeto é um array
    assert.strictEqual(expected.length, 2);// Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(typeof expected, 'object');// Teste que os dois itens dentro do array retornado pela função são objetos.
    assert(objTwo !== objOne);// Teste que os dois objetos são diferentes entre si.
    assert( finalOne && finalTwo === '123') //Teste que os dois productIds terminam com 123.
  });
});

