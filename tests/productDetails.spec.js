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
    // https://pt.stackoverflow.com/questions/77190/como-saber-se-um-objeto-%C3%A9-um-array-em-javascript-sem-jquery
    assert.strictEqual(Array.isArray(productDetails()), true)
    // Teste que o array retornado pela função contém dois itens dentro.
    const arr = productDetails();
    assert.strictEqual(arr.length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const tipos = () => {
      if (typeof arr[0] === 'object' && typeof arr[1] === 'object'){
        return true;
      }else {
        return false;
      }
    }
    assert.strictEqual(tipos(), true)
    // Teste que os dois objetos são diferentes entre si.
    const testeDoisObjetos = () => {
      if (arr[0].name !== arr[1].name){
        return false;
      }else {
        return true;
      }
    }
    assert.strictEqual(testeDoisObjetos(), true)
    // Teste que os dois productIds terminam com 123.
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
    const numerosValidosU = 0;
    const numerosValidosD = 0;
    const testeTerminamComNumeros = () => {
      if (arr[0].details.productId.length -1 === 3){
        numerosValidosU += numerosValidosU;
      }
      if (arr[0].details.productId.length -2 === 2){
        numerosValidosU += numerosValidosU;
      }
      if (arr[0].details.productId.length -3 === 1){
        numerosValidosU += numerosValidosU;
      }
      if (arr[1].details.productId.length -1 === 3){
        numerosValidosD += numerosValidosD;
      }
      if (arr[1].details.productId.length -2 === 2){
        numerosValidosD += numerosValidosD;
      }
      if (arr[1].details.productId.length -3 === 1){
        numerosValidosD += numerosValidosD;
      }
      if (numerosValidosD === numerosValidosU){
        return true;
      }else {
        return false;
      }
    }
    assert.strictEqual(testeTerminamComNumeros(), true)
  });
});
