/*
   Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

const createStudent = (name) => ({ // recebe como parâmetro um nome,
  name, // name, contendo o nome passado como parâmetro;
  feedback: () => 'Eita pessoa boa!', // feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.
});

module.exports = createStudent;