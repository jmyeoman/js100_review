function isNotANumber(value) {
  if ((typeof value === 'undefined') || 
    (typeof value === 'object') || 
    (typeof value === 'boolean') || 
    (typeof value === 'string') || 
    (typeof value === 'symbol') ||
    (typeof value === 'function') ||
    (value <= Infinity)) {
      return false
    } else {
      return true
    }
}

console.log(isNotANumber(NaN))
console.log(isNotANumber(4))
console.log(isNotANumber(undefined))
console.log(isNotANumber('hello'))

