/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/
const assert = require('assert');

const feed = () => 'Eita pessoa boa!';
const createStudent = (string) => {
  let estudante = {
    name: `${string}`,
    feedback: feed,
  };
  let estudante2 = {
    name: `${string}`,
    feedback: feed,
  };
  let estudante3 = {
    name: `${string}`,
    feedback: feed,
  };
  
  return estudante;
};

module.exports = createStudent;
