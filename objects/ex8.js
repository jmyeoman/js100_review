/*let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let copyObj = function(obj, arrayOfKeys) {
  let myObj = {}
  if (arrayOfKeys) {
  arrayOfKeys.forEach(key => {
    myObj[key] = obj[key]
  })
  return myObj
  } else {
    Object.assign(myObj, obj)
    return myObj
  }
}

let newObj = copyObj(objToCopy)
console.log(newObj)

let newObj2 = copyObj(objToCopy, ['foo', 'qux' ]);
console.log(newObj2)

let newObj3 = copyObj(objToCopy, ['bar'])
console.log(newObj3)
*/

function copyObj(obj, keys) {
  let newObject = {}
  if (keys) {
    keys.forEach( element => {
      newObject[element] = obj[element]
    })
  } else {
    Object.assign(newObject, obj)
  }
  return newObject
}


let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, ['foo', 'qux'])
console.log(newObj2)

let newObj3 = copyObj(objToCopy, ['bar'])
console.log(newObj3)

