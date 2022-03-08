console.log('wow wow wow wow world')

let array = [1,2,3]

let sum = 0
for (let number of array) {
  sum += number
}

array = array.map(n => n + 1)

console.log(sum)
