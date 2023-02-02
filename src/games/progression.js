import readlineSync from 'readline-sync';
import greetings from '../cli.js';
import getRandomNumber from '../getRandomNumber.js';

const userName = greetings();

export default function progression() {
  console.log('What number is missing in the progression?'); // вывод условия игры

  for (let i = 0; i < 3; i += 1) {
    const result = [];
    const number1 = getRandomNumber(); // ищем рандомное число
    const number2 = getRandomNumber(); // ищем рандомное число
    for (let a = 0; a < 9; a += 1) {
      result[0] = number1;
      result[a + 1] = result[a] + number2;
      result.push(result);
    }
    const randomIndex = getRandomNumber(0, result.length - 1);
    const hiddenNumberIndex = String(result[randomIndex]);
    result[randomIndex] = '..';

    console.log(`Question: ${result}`); // выводим вопрос
    const userAnswer = readlineSync.question('Your answer: '); // интерактивный разговор с пользователем

    if (userAnswer !== hiddenNumberIndex) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumberIndex}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
