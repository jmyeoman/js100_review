let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(element, array) {
  return array.reduce( (accumulator, currentValue) => {
    accumulator = (accumulator || (currentValue === element));
    return accumulator;
  }, false)
}  

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false