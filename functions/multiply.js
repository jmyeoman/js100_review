function multiply(num1, num2) {
  return num1 * num2;
}

function getNum(prompt) {
  let rlSync = require('readline-sync');
  let num = parseFloat(rlSync.question(prompt));
  return num
}

let firstNum = getNum("Enter the first number\n");
let secondNum = getNum("Enter the second number\n");

console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`)
  