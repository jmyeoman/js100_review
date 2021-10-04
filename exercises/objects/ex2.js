let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
};

jane.greet = function greet(name) {
  return `Hej, ${name}!`
}

console.log(jane.greet('Bobby')); // Hej, Bobby!