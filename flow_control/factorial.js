let rlSync = require('readline-sync')
let yourNum = rlSync.question("Give me a number and I will give you its factorial: ")
let result = 1
yourNum = parseInt(yourNum)
/*
function factorial(num) {
  for (let f = num; f > 0; f--) {
  result = result * f
  }
  return result
}

console.log(factorial(yourNum))
*/

function factorial(number) {
  if (number === 1) {
    return 1;
  }
  
  return  number * factorial(number - 1)
}

console.log(factorial(yourNum))

