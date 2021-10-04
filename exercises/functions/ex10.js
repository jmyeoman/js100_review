function localGreet(code) {
  function extractLanguage(newCode) {
  return newCode.split('_')[0];
  }
  function extractRegion(locale) {
  return locale.split('.')[0]
               .split('_')[1];
  }
  let language = extractLanguage(code)
  let region = extractRegion(code)
  
  
  switch (language) {
    case 'fr': return 'Salut!'
    case 'en':
      switch (region) {
        case 'US': return 'Hey!';
        case'GB': return 'Hello!';
        case 'AU': return 'Howdy!';
  
      }
   }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'

console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'
