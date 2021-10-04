let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0]
myArray.forEach(function(num) {
  if (num % 2 === 0 && num !== 0) {
    console.log(num)
  }

})

myArray.forEach(num => num % 2 === 0 && num !== 0 ? console.log(num) : null)

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0 && myArray[i] !== 0) {
    console.log(myArray[i])
  }
}

