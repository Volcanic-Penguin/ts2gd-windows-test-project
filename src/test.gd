
# This file has been autogenerated by ts2gd. DO NOT EDIT!




func __map(list, fn):
  var result = []

  for item in list:
    result.append(fn[0].call_func(item, fn[1]))

  return result
    

func __gen(n: float, captures):

  return n + 1

console.log("wow wow wow wow world")

var array = [1, 2, 3]


var sum: int = 0


for number in array:
  sum += number


array = __map(array, [funcref(self, "__gen"), {}])

console.log(sum)
