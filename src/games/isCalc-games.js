import getRandomNumber from '../getRandomNumber.js';
import getGame from '../index.js';

const taskGame = 'What is the result of the expression?';

const getRandomExpression = () => {
  const arithmeticOperators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operator = arithmeticOperators[getRandomNumber(0, arithmeticOperators.length - 1)];
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
  return expression;
}

function startGame() {
  const question = getRandomExpression();
  const correctAnswer = String(decision(question));
  return [question, correctAnswer];
}

export default function startCalc() {
  getGame(taskGame, startGame);
}
