function allMatches(arrayOfWords, regEx) {
  let newArray = []
  arrayOfWords.forEach(element => {
    if (regEx.test(element)) { 
      newArray.push(element)
    }
  }
    )
  return newArray
}


let words = [
  'laboratory',
  'experiment',
  'flab', 
  'Pans Labrynth',
  'elaborate',
  'polar bear',
  ];
  
console.log(allMatches(words, /lab/))
