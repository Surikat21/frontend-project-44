import getRandomNumber from '../getRandomNumber.js';
import getGame from '../index.js';

const taskGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

const startGame = () => {
  const number1 = getRandomNumber(1, 10); // ищем рандомное число
  const number2 = getRandomNumber(1, 10); // ищем рандомное число
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));
  return [question, correctAnswer];
};

export default () => {
  getGame(taskGame, startGame);
};
