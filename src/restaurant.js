/* eslint-disable max-len */

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, 
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado; 
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. 
  Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js` E NÃO PELO PASSO 1 DESTE ARQUIVO!
*/

// PASSO 1: Crie uma função `createMenu()` que, dado um objeto passado por parâmetro, retorna um objeto com o seguinte formato: { fetchMenu: () => objetoPassadoPorParametro }.
//
// Agora faça o TESTE 4 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 2: Adicione ao objeto retornado por `createMenu` uma chave `consumption` que, como valor inicial, tem um array vazio.
//
// Agora faça o TESTE 5 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 3: Crie uma função, separada da função `createMenu()`, que, dada uma string recebida por parâmetro, 
// adiciona essa string ao array de `objetoRetornado.consumption`. Adicione essa função à chave `order`.
// DICA: para criar isso, você pode: 
// - Definir a função `createMenu()`
// - Definir o objeto que a `createMenu()` retorna, mas separadamente 
// - E, depois, definir a função que será atribuída a `order`.
// ```
// const restaurant = {}
//
// const createMenu = (myMenu) => // Lógica que edita o objeto `restaurant`
//
// const orderFromMenu = (request) => // Lógica que adiciona à chave `consumption` de `restaurant` a string recebida no parâmetro `request`. 
// // Essa função deve ser associada à chave `order` de `restaurant`
// ```
// Agora faça o TESTE 6 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 4: Adicione ao objeto retornado por `createMenu()` uma chave `pay` com uma função que varre todo os itens de `objetoRetornado.consumption`, 
// soma o preço de todos checando-os no menu e retorna o valor somado acrescido de 10%. DICA: para isso, 
// você precisará varrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

const createMenu = (objetoMenu) => {
  const menu = {
    fetchMenu: () => objetoMenu,
    consumption: [],
    order: (consumo) => {
      if (menu.consumption[menu.consumption.length - 1] !== consumo) {
        menu.consumption.push(consumo);
      }
    },
    pay: () => {
      let output = 0;
      menu.consumption.forEach((itemConsumo) => { // o primeiro forEach sera o que irá percorrer o array consumption
        Object.values(menu.fetchMenu(objetoMenu)).forEach((listaItensMenu) => { // como precisamos percorrer o objeto que esta em fetchMenu, entao o objeto se transforma em um array que cada posição é um objeto que contem somente os valores o segundo ForEach sera para percorrer esse array 
          Object.keys(listaItensMenu).forEach((item, index) => { // cada posição desse array é um objeto precisamos percorre-lo para encontrar a chave que esta em itemConsumo
            if (item === itemConsumo) {
              output += Object.values(listaItensMenu)[index];
            }
          });
        });
      });
      output *= 1.10;
      return output.toFixed(2);
    },
  };
  return menu;
};

const meuRestaurante = createMenu({
  food: {
    coxinha: 3.90,
    sanduiche: 9.90,
    pastel: 8.90,
    picanha: 25.90,
    sushi: 19.90,
  },
  drinks: {
    agua: 3.90,
    cerveja: 6.90,
    suco: 6.90,
    refrigerante: 11.90,
  },
  sobremesa: {
    sorvete: 6.90,
    pudim: 6.90,
    milkshake: 11.90,
  }
});

meuRestaurante.order('sanduiche');
meuRestaurante.order('pastel');
meuRestaurante.order('picanha');
meuRestaurante.order('agua');
meuRestaurante.order('suco');
meuRestaurante.order('refrigerante');
meuRestaurante.order('sorvete');
meuRestaurante.order('milkshake');


console.log(meuRestaurante.pay())// retorna 94.82

module.exports = createMenu;