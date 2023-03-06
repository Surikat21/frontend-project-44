import getRandomNumber from '../getRandomNumber.js';
import getGame from '../examination.js';

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0; // проверка на четность

function startGame() {
  const number = getRandomNumber(); // ищем рандомное число
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
}

export default function parityCheck() {
  getGame(taskGame, startGame);
}
