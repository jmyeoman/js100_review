let rlSync = require('readline-sync');
let age = rlSync.question('what\'s your age? ');
/* console.log(`You are ${age} years old.`);
while (i < 50) {
  console.log(`In ${i} years, you will be ${i + parseInt(age)} years old.`); 
  i = i + 10
};
*/
for (let i = 1; i < 10; i++) {
  console.log(`In ${i} years, you will be ${i + parseInt(age)} years old.`)
}

  