import getRandomNumber from '../getRandomNumber.js';
import getGame from '../index.js';

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0; // проверка на четность

const startGame = () => {
  const number = getRandomNumber(1, 10); // ищем рандомное число
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  getGame(taskGame, startGame);
};
