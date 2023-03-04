

function average(numbers) {
  let sum = 0

  numbers.forEach(numbers => {
    sum += numbers
  })
  const avg = sum / numbers.length

  return avg
  
}


console.log(average([10, 9, 6, 8, 9, 1, 5, 7]))
console.log(average([2, 5, 7, 1, -2]))
console.log(average([10, 10, 10, 10, 9]))
console.log(average([25, 75]))