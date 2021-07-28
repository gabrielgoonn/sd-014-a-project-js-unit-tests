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

let agora = productDetails('pao', 'arroz');
console.log(agora[0].details.productId);
let opa = agora[0].details.productId
console.log(opa.endsWith('123'));
let bora = Object.values(productDetails('gel', 'mascara'));

//console.log(bora)
//console.log(bora.endsWith('mascara123'));

console.log(Object.entries(productDetails('ok','yes')))
console.log(productDetails.name)
console.log(productDetails.length);

module.exports = productDetails;
