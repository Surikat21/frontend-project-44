import getRandomNumber from '../getRandomNumber.js';
import getGame from '../index.js';

const taskGame = 'What number is missing in the progression?';

function startGame() {
  const length = getRandomNumber(5, 10);
  const result = [];
  const number1 = getRandomNumber(1, 10); // ищем рандомное число
  const number2 = getRandomNumber(1, 10); // ищем рандомное число
  for (let a = 0; a < length; a += 1) {
    result[0] = number1;
    result[a + 1] = result[a] + number2;
    result.push(result);
  }
  const randomIndex = getRandomNumber(0, result.length - 1);
  const hiddenNumberIndex = String(result[randomIndex]);
  result[randomIndex] = '..';
  const question = `${result.join(' ')}`;
  const correctAnswer = hiddenNumberIndex;
  return [question, correctAnswer];
}

export default function startProgression() {
  getGame(taskGame, startGame);
}
