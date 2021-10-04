//bmi = weightInKilograms / heightInMeters**2;

function calculateBMI(height, weight) {
  let bmi = weight / (height / 100) ** 2
  let finalBmi = Math.round(bmi * 100) / 100
  return finalBmi
}

console.log(calculateBMI(180, 80)); // "24.69"