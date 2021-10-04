function catAge(humanYears) {
  let newAge = 0
  while (humanYears > 0) {
    if (humanYears === 1) {
      newAge = newAge + 15
    } else if (humanYears === 2) {
      newAge = newAge + 9 
    } else {
      newAge = newAge + 4
    }
    humanYears -= 1
  }
  console.log(newAge)
  return newAge
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32