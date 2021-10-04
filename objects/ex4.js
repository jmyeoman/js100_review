let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let newArray= []
for (let prop in obj) {
  newArray.push(prop.toUpperCase());
}

console.log(newArray);

let objKeys = Object.keys(obj)
let upperCaseKeys = objKeys.map(element => element.toUpperCase())

console.log(upperCaseKeys)