import greetings from '../cli.js';
import getRandomNumber from '../getRandomNumber.js';
import examination from '../examination.js';

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
};

export default function calc() {
  console.log('What is the result of the expression?'); // вывод условия игры

  function examination(generateRound) {
    const question = getRandomExpression(); // ищем рандомный пример
    const correctAnswer = decision(question);
    return [question, correctAnswer];
  }
}
