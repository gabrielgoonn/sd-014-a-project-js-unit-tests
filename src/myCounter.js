/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

// O myArrayOrder: vai popularizar os arrays em ordem a cada loop.
const myCounter = () => {
  let myArrayOrder = [];
  // Primeiro entra nesse loop de repetição. 
  for (let index = 0; index <= 3; index += 1) {
    // Referência: w3schools https://www.w3schools.com/jsref/jsref_push.asp
    myArrayOrder.push(index);
    // Depois entra nesse outro loop de repetição.
    for (let startNumber2 = 2; startNumber2 <= 3; startNumber2 += 1) {
      myArrayOrder.push(startNumber2);
    }
  }
  return myArrayOrder;
};

module.exports = myCounter;
