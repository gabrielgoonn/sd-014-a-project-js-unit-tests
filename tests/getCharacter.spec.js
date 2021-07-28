/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const { get } = require('https');
const getCharacter = require('../src/getCharacter');

/*
Essa função recebe como parâmetro o nome de um personagem e retorna um objeto com seu nome, classe e frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna undefined.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

{
  name: 'Nome do Personagem',
  class: 'Classe do Personagem' ,
  phrases: ['frase1', 'frase2']
}

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Elabore testes para verificar se a função está funcionando de acordo com o proposto.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}

OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
 
    const charactersObj = {
      arya: {
        name: 'Arya Stark',
        class: 'Rogue',
        phrases: ['Not today', 'A girl has no name.'],
      },
      brienne: {
        name: 'Brienne Tarth',
        class: 'Knight',
        phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'],
      },
      melissandre: {
        name: 'Melissandre',
        class: 'Necromancer',
        phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'],
      },
    };
    const obj2 = {
      arya: {
        name: 'arya stark',
        class: 'rogue',
        phrases: ['not today', 'a girl has no name.'],
      },
      brienne: {
        name: 'brienne tarth',
        class: 'knight',
        phrases: ['im no lady, your grace.', 'i, brienne of tarth, sentence you to die.'],
      },
      melissandre: {
        name: 'melissandre',
        class: 'necromancer',
        phrases: ['death by fire is the purest death.', 'for the night is dark and full of terrors.'],
      },
    };

    // const lowerCaseObj = charactersObj.toLowerCase();

    // console.log(lowerCaseObj)

    const characterFunc = getCharacter(charactersObj);

    // ESCREVA SEUS TESTES ABAIXO:
    assert.strictEqual(getCharacter({}), undefined);
    assert.strictEqual(characterFunc.getCharacter(charactersObj.arya), charactersObj.arya);
    assert.strictEqual(characterFunc.getCharacter(charactersObj.brienne), charactersObj.brienne);
    assert.strictEqual(characterFunc.getCharacter(charactersObj.melissandre), charactersObj.melissandre);
    assert.notStrictEqual(characterFunc.getCharacter(charactersObj.melissandre), undefined);
    assert.strictEqual(characterFunc.getCharacter(obj2), obj2);
    // Teste se a função se os parâmetros não são Case Sensitive.
  });
});
