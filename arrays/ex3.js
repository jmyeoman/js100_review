let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < myArray.length; i++) {
  let value = myArray[i];
  value.forEach(num => num % 2 === 0 && num !== 0 ? console.log(num) : null);
}