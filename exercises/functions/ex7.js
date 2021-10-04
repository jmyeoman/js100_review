function greet(languageCode) {
  if (languageCode === 'en') {
    console.log('Hi!')
  } else if (languageCode === 'fr') {
    console.log('Salut!')
  } else if (languageCode === 'pt') {
    console.log('Ola!')
  } else if (languageCode === 'de') {
    console.log('Halo!')
  } else if (languageCode === 'sv') {
    console.log('Hej!')
  } else if (languageCode === 'af') {
    console.log('Haai!') 
  } else {
    console.log('You didn\t enter a recognized language code')
  }
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'

function greet2(languageCode) {
  switch (languageCode) {
    case 'en':
      console.log('Hi!');
      break;
    case 'fr':
      console.log('Salut!');
      break;
    case 'pt':
      console.log('Ola!');
      break;
    case 'de':
      console.log('Hallo!');
      break;
    case 'sv':
      console.log('Hej!');
      break;
    case 'af':
      console.log('Haai!')
      break;
    default:
     console.log('You didn\'t enter a proper language code')
     break
  }
}
greet2('en'); // 'Hi!'
greet2('fr'); // 'Salut!'
greet2('pt'); // 'Olá!'
greet2('de'); // 'Hallo!'
greet2('sv'); // 'Hej!'
greet2('af'); // 'Haai!'

function greet3(languageCode) {
  switch (languageCode){
    case 'en': return 'Hi';
    default: return 'This is not a recognized language code.'
  }
}