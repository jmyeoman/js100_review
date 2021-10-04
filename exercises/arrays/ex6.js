let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let i = 0; i < vocabulary.length; i++) {
  vocabulary[i].forEach(element => console.log(element))
}

// Expected output:
// happy
// cheerful
// merry
// etc...