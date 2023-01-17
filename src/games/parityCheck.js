import readlineSync from 'readline-sync';
import responsecheck from './responsecheck.js';
import greetings from '../cli.js';

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
};

const isEven = (number) => number % 2 === 0; // проверка на четность

export default function parityCheck() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // вывод условия игры

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(); // ищем рандомное число

    console.log(`Question: ${number}`); // выводим вопрос

    const userAnswer = readlineSync.question('Your answer: '); // интерактивный разговор с пользователем

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    const userAnswerIsValid = responsecheck(userAnswer); // проверка ответа пользователя
    if ((!userAnswerIsValid) || (userAnswer !== correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      // break;
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
const userName = greetings();
