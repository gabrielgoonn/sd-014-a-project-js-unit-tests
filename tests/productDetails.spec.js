const { getLineInfo } = require('acorn');
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
    //assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    Array.isArray(productDetails); //https://www.w3schools.com/jsref/jsref_isarray.asp
    // Teste que o array retornado pela função contém dois itens dentro.
    let tam = Object.values(productDetails('Alcool gel', 'Mascara')).length;
    assert.strictEqual(tam, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('Alcool gel', 'Máscara')[0], 'object');
    assert.strictEqual(typeof productDetails('Alcool gel', 'Máscara')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails('Alcool gel', 'Máscara')[0].name, productDetails('Alcool gel', 'Máscara')[1].name);
    // Teste que os dois productIds terminam com 123.
    let array1=[], array2=[], num1=[], num2=[];
    for(let i=0; i<3; i++){
      num1[i] = productDetails('Alcool gel', 'Mascara')[0].details.productId[productDetails('Alcool gel', 'Máscara')[0].details.productId.length-1-i];
      array1.push(num1[i]);
      num2[i] = productDetails('Alcool gel', 'Máscara')[1].details.productId[productDetails('Alcool gel', 'Máscara')[1].details.productId.length-1-i];
      array2.push(num2[i]);
    }
    let a1 = array1.join("");
    let a2 = array2.join("");
    assert.strictEqual(a1, "321");
    assert.strictEqual(a2, "321");
  });
});
