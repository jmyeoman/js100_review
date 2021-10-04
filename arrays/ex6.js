function oddLengths(array) {
  let newArray = array.map(arr => arr.length)
  return newArray.filter(element => element % 2 !== 0)
}

let arr = ['a', 'abcd', 'abc', 'ab'];
console.log(oddLengths(arr))