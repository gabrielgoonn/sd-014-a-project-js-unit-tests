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

const extraiTresUltimos = () => { // essa função percorre os 3 ultimos digitos do details dos produos de forma dinamica
  let arrayComObjetos = Object.values(productDetails('Alcool gel', 'Máscara'));
  let tresUltimosDigitos = '';
  for (let index = 0; index < arrayComObjetos.length; index += 1) {
    let arrayDetails = Object.values(arrayComObjetos[index].details)[0]; // extrai valor do objeto.details em um array com apenas uma posição, e acessa essa unica posição.
    for (let index2 = arrayDetails.length - 3; index2 < arrayDetails.length; index2 += 1) {
      tresUltimosDigitos = tresUltimosDigitos + arrayDetails[index2];
    }
  }
  return tresUltimosDigitos;
}


describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara')[0], 'object');
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[0] !== productDetails('Alcool gel', 'Máscara')[1], true);
    // Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(extraiTresUltimos(), '123123');
  });
});