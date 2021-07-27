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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const products = productDetails(`Alcool gel`, `Máscara`);
    assert.strictEqual(Array.isArray(products), true);

    //https://stackoverflow.com/questions/4775722/how-to-check-if-an-object-is-an-array?noredirect=1&lq=1
    // Se um array contém um objeto, ao utilizar typeof() o resultado será objeto
    // apesar de ser um array. utiliza-se então Array.isArray(arr)

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(products.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(products[0]), 'object');
    assert.strictEqual(typeof(products[1]), 'object');

    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(JSON.stringify(products[0]) === JSON.stringify(products[1]), true);
    //https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
    
    // Teste que os dois productIds terminam com 123.
    const checkEnd = (string) => {
      let end ='';
      for (let index = string.length -3; index < string.length; index += 1){
        end += string[index];
      };
      return end
    }; 
    assert.strictEqual(checkEnd(products[0].details.productId), '123'  )
    assert.strictEqual(checkEnd(products[1].details.productId), '123'  )
  });
});
