function oddLengths(array) {
  return array.reduce(
    function (accumulator, element) {
       if (element.length % 2 !== 0) {
         let elementLength = element.length
       accumulator.push(elementLength)
       }
       return accumulator
  }, [])
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab']
console.log(oddLengths(arr))