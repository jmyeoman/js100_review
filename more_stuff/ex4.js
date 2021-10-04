function findLargest(numList) {
  let largest = numList.reduce((accumulator, currentValue) => {
    if (currentValue > accumulator) {
      return currentValue
    } else {
      return accumulator
    }
  }, -Infinity
  )
  console.log(largest)
}

let list1 = [1, 6, 3, 2]

findLargest(list1)

let list2 = [ -1, -6, -3, -2]
findLargest(list2)

let list3 = [2, 2]
findLargest(list3)