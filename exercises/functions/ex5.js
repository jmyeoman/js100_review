function compareByLength(firstWord, secondWord) {
  if (firstWord.length < secondWord.length) {
    console.log(-1)
  } else if (firstWord.length > secondWord.length) {
    console.log(1)
  } else {
    console.log(0)
  }
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0