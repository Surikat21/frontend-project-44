import getRandomNumber from '../getRandomNumber.js';
import getGame from '../examination.js';

const taskGame = 'What is the result of the expression?';

const getRandomExpression = () => {
  const arithmeticOperators = ['+', '-', '*'];
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = arithmeticOperators[Math.floor(Math.random() * arithmeticOperators.length)];
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

function startGame() {
  const question = getRandomExpression();
  const correctAnswer = decision(question);
  return [question, correctAnswer];
}

export default function startCalc() {
  getGame(taskGame, startGame);
}
