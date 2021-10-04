let myProtoObj = {
  foo: 1,
  bar: 2,
};

let childOfObj = Object.create(myProtoObj)

console.log(childOfObj)

childOfObj.qux = 3

console.log(childOfObj)