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
    //  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    let isArray = Array.isArray(productDetails('Alcool gel', 'Máscara'));
    if (isArray) {
      isArray = 'array';
    }
    assert.strictEqual(isArray, 'array');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.keys(productDetails('Alcool gel', 'Máscara')).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    let obj2 = [typeof productDetails('Alcool gel', 'Máscara')[0], typeof productDetails('Alcool gel', 'Máscara')[1]];
    if (obj2[0] === 'object' && obj2[1] === 'object') {
      obj2 = 'object';
    }
    assert.strictEqual(obj2, 'object');
    // Teste que os dois objetos são diferentes entre si.
    //  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const [obj0, obj1] = productDetails('Alcool gel', 'Máscara');
    assert.notDeepStrictEqual(obj0, obj1);
    // Teste que os dois productIds terminam com 123.
    const id0 = obj0.details.productId;
    let fim0 = [];
    const id1 = obj1.details.productId;
    let fim1 = [];
    console.log(id0);
    console.log(id1);
    let id123 = false;
    let c = 0;
    for (let i = id0.length - 1; i >= id0.length - 3; i -= 1) {
      fim0.push(id0[i]);
    }
    for (let i = id1.length - 1; i >= id1.length - 3; i -= 1) {
      fim1.push(id1[i]);
    }
    for (let i = 0; i < 3; i += 1) {
      if (fim0[i] === fim1[i]) {
        c += 1;
      }
    }
    if (c === 3) {
      id123 = true;
    }
    assert.strictEqual(id123, true);
  });
});
