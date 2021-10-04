function getName(prompt) {
let rlSync = require('readline-sync');
let answer = rlSync.question(prompt)
return answer;
}


let firstName = getName("What is your first name?\n");
let lastName = getName("What is your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);

