function isNegativeZero(value) {
  if ((value === 0) && (1 / value === -Infinity)) {
    return true
  } else {
    return false
  }
}

console.log(isNegativeZero(-0))
console.log(isNegativeZero(0))