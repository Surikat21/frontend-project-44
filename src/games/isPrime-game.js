import getRandomNumber from '../getRandomNumber.js';
import getGame from '../index.js';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isEven = (number) => { // проверка на простое число
  if (number === 1) {
    return true;
  }
  for (let j = 2; j < number; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

function startGame() {
  const number = getRandomNumber(1, 10); // ищем рандомное число
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
}

export default function startPrimeNumber() {
  getGame(taskGame, startGame);
}
