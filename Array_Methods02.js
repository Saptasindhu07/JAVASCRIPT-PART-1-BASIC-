let test_array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let test_array_pop=[...test_array]
let test_array_splice=[...test_array]
let test_array_

//MAP FUNCTION
console.log(test_array.map((a)=>a**2))

//Filter Function

console.log(test_array.filter(a=>a%2==0)) //even
console.log(test_array.filter(a=>a%2!=0)) //odd

//Find Method

console.log(test_array.find(a=>a%3==0)) //1st multiple of 3 in array

//Every, Some

console.log(test_array.every(a=>Number.isInteger(a))) //checks if Integer

//SPLICE Method

test_array_splice.splice(2,3)
console.log(test_array_splice)
test_array_splice=[...test_array]
test_array_splice.splice(2,0,"HELLO")
console.log(test_array_splice)

//INDEX METHODS

console.log("Index of 3 is ",test_array.findIndex(a=>a==3))
console.log("Index of 5 is ",test_array.indexOf(5))

//POP Method

console.log("Last elemen is deeleted and its value is ", test_array_pop.pop())
console.log("New Array is ",test_array_pop)

