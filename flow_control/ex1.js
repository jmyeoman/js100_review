/*
false false
3     true
true  3
3     3
false false
true  true
false false 
false false
true  false
true  true
false false
true  true

if (foo()) {
  return 'bar'
} else {
  return qux()
}
*/

function allCaps(word) {
  if (word.length > 10) {
    return word.toUpperCase() 
  } else {
    return word
  }
}

let rlSync = require('readline-sync')
let myWord = rlSync.question('give me a big word: ')

console.log(allCaps(myWord))