let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let obj = {}

for (let i = 0; i < nestedArray.length; i++) {
  let key = nestedArray[i][0]
  let value = nestedArray[i][1]
  obj[key] = value
}


console.log(obj)

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }