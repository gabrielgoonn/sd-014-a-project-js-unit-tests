/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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
*/

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];

module.exports = productDetails;

const assert = require('assert');

/*  const ai = productDetails('Alcool gel', 'Máscara');
console.log(ai);
console.log(typeof ai);
let isArray = Array.isArray(productDetails('Alcool gel', 'Máscara'));
if (isArray) {
  isArray = 'array';
}
console.log(isArray);
console.log(typeof productDetails('Alcool gel', 'Máscara')[0]);
console.log(typeof productDetails('Alcool gel', 'Máscara')[1]);
let obj2 = [typeof productDetails('Alcool gel', 'Máscara')[0], typeof productDetails('Alcool gel', 'Máscara')[1]];
if (obj2[0] === 'object' && obj2[1] === 'object') {
  obj2 = 'object';
}
console.log(obj2);
console.log(productDetails('Alcool gel', 'Máscara')[0]); 
console.log(obj0);
const obj0 = productDetails('Alcool gel', 'Máscara')[0];
const obj1 = productDetails('Alcool gel', 'Máscara')[1];
console.log(obj0.details.productId);
const [obj0, obj1] = productDetails('Alcool gel', 'Máscara');
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
} */
