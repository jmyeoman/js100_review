let sentence = 'launch school tech & talk'

let firstLetterUpperCase = function(string1) {
  let array = string1.split(' ')
  let newArray = []
  
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i][0].toUpperCase() + array[i].slice(1))
  }
  
  return newArray.join(' ')
}

console.log(firstLetterUpperCase(sentence))