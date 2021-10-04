function checkFor3(array) {
  return array.reduce((accumulator, element) => {
  if (element === 3) {
    element = true;
  } else {
    element = false
  }
  return accumulator || element
  },false
    );
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(checkFor3(numbers1));
console.log(checkFor3(numbers2));
console.log(checkFor3(numbers3));
