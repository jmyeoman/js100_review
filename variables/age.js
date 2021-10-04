let rlSync = require('readline-sync');
let age = rlSync.question('what\'s your age? ');
let i = 10
console.log(`You are ${age} years old.`);
while (i < 50) {
  console.log(`In ${i} years, you will be ${i + parseInt(age)} years old.`); 
  i = i + 10
};