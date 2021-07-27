/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (nome, idade) => {
  if (nome === undefined && idade === undefined) {
    return undefined;
  }
  const name = `Oi, meu nome é ${nome}!`;
  const age = `Tenho ${idade} anos,`;
  const fimFrase = 'trabalho na Trybe e mando muito em programação!\n#VQV!';
  const frase = `${name}\n${age}\n${fimFrase}`;
  return frase;
};

module.exports = vqv;
