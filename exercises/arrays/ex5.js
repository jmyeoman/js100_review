let scores = [96, 47, 113, 89, 100, 102];

let over100 = scores.filter(element => element >= 100)

let added100 = over100.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)

console.log(added100)

let count = 0
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 100) {
    count += 1
  }
}
  
console.log(count)