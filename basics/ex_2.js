function places(num) {
  let ones = num % 10;
  let number = (num - ones) / 10;
  let tens = number % 10;
  number = (number - tens) / 10;
  let hundreds = number % 10;
  let thousands = (number - hundreds) / 10;
  console.log(`The thousands place is ${thousands}`);
  console.log(`The hundreds place is ${hundreds}`);
  console.log(`The tens place is ${tens}`);
  console.log(`The ones place is ${ones}`);
  
}

places(4936);