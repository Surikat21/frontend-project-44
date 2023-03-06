import getRandomNumber from '../getRandomNumber.js';
import getGame from '../examination.js';

const taskGame = 'Find the greatest common divisor of given numbers.';

function nod(number1, number2) { // вычисление НОД
  while (number2) {
    const k = number2;
    number2 = number1 % number2;
    number1 = k;
  }
  return number1;
}

function startGame() {
  const number1 = getRandomNumber(); // ищем рандомное число
  const number2 = getRandomNumber(); // ищем рандомное число
  const question = `${number1} ${number2}`;
  const correctAnswer = nod(number1, number2);
  return [question, correctAnswer];
}

export default function startCommonDivisor() {
  getGame(taskGame, startGame);
}
