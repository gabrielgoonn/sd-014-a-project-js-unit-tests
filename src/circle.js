/* eslint-disable max-len */

/*
  Essa função recebe o raio de um círculo,
  retornando um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos! Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/
const assert = require('assert');

const circle = (radius) => {
  const PI = 3.14;
  if (!radius) { return undefined; }
  return {
    radius,
    area: PI * radius * radius,
    circumference: 2 * PI * radius,
  };
};
const expected = ['radius', 'area', 'circumference'];
const raioDois = {
  radius: 2,
  area: 3.14 * 2 * 2,
  circumference: 2 * 3.14 * 2,
};
const raioTres = {
  radius: 3,
  area: 3.14 * 3 * 3,
  circumference: 18.84,
};
assert.strictEqual(typeof circle(1), 'object');
assert.strictEqual(Object.keys(circle(1))[0], expected[0]);
assert.strictEqual(Object.keys(circle(1))[1], expected[1]);
assert.strictEqual(Object.keys(circle(1))[2], expected[2]);
assert.deepStrictEqual(circle(), undefined);
assert.deepStrictEqual(circle(2), raioDois);
assert.deepStrictEqual(circle(3), raioTres);

module.exports = circle;
