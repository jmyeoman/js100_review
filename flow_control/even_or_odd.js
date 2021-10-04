function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Error: You did not enter an integer');
    return;
  } 
  
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  } 
}
/*
let rlSync = require('readline-sync');
let yourNum = rlSync.question('Enter a number:');
*/
evenOrOdd(4);
