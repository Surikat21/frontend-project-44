import readlineSync from 'readline-sync';
import greetings from '../cli.js';
import getRandomNumber from '../getRandomNumber.js';
import responsecheck from './responsecheck.js';

const userName = greetings();

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

export default function primeNumber() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"'); // вывод условия игры

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(); // ищем рандомное число

    console.log(`Question: ${number}`); // выводим вопрос

    const userAnswer = readlineSync.question('Your answer: '); // интерактивный разговор с пользователем

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    const userAnswerIsValid = responsecheck(userAnswer); // проверка ответа пользователя
    if ((!userAnswerIsValid) || (userAnswer !== correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
