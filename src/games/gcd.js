import readlineSync from 'readline-sync';
import greetings from '../cli.js';
import getRandomNumber from '../getRandomNumber.js';

const userName = greetings();

function nod(number1, number2) { // вычисление НОД
  while (number2) {
    const k = number2;
    number2 = number1 % number2;
    number1 = k;
  }
  return number1;
}

export default function commonDivisor() {
  console.log('Find the greatest common divisor of given numbers.'); // вывод условия игры

  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber(); // ищем рандомное число
    const number2 = getRandomNumber(); // ищем рандомное число

    console.log(`Question: ${number1} ${number2}`); // выводим вопрос

    const userAnswer = readlineSync.question('Your answer: '); // интерактивный разговор с пользователем

    const correctAnswer = nod(number1, number2);

    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
