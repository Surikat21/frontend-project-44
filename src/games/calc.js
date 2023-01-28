import readlineSync from 'readline-sync';
import greetings from '../cli.js';
import getRandomNumber from '../getRandomNumber.js';

const userName = greetings();

const getRandomExpression = () => {
  const arithmeticOperators = ['+', '-', '*'];
  const number1 = getRandomNumber(); // ищем рандомное число
  const number2 = getRandomNumber(); // ищем рандомное число
  const operator = arithmeticOperators[Math.floor(Math.random() * arithmeticOperators.length)];
  console.log(`Question: ${number1} ${operator} ${number2}`); // выводим вопрос
  return `${number1} ${operator} ${number2}`;
};
function decision(expression) {
  const expressionParts = expression.split(' ');
  const number1 = Number(expressionParts[0]);
  const number2 = Number(expressionParts[2]);
  const operator = expressionParts[1];

  if (operator === '-') {
    return (number1 - number2);
  } if (operator === '+') {
    return number1 + number2;
  } if (operator === '*') {
    return number1 * number2;
  }
}
export default function calc() {
  console.log('What is the result of the expression?'); // вывод условия игры

  for (let i = 0; i < 3; i += 1) {
    const question = getRandomExpression(); // ищем рандомный пример

    const userAnswer = readlineSync.question('Your answer: '); // интерактивный разговор с пользователем

    const correctAnswer = decision(question);

    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      // break;
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
