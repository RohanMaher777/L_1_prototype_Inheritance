//rest operator( allows a function to take an indefinite number of arguments and bundle them in an array )
// passing as the argument in the function (rest operator)
function print(a, b, ...args){
    console.log(a, b, args)
}

print("one", "two", "three", "four", "five")

//spread operator(that allows you to expand the elements of an iterable (such as arrays, strings, or objects) into another iterable or function call.)
// passing array in the another array (spread operator) or passing one of the value
let arr1 = ['sunday', 'monday', 'tuesday']
let arr2 = [ ...arr1, 'wednsday', 'thursday', 'friday']
console.log(arr2)

/*the changes which is made in the one array it will also going to 
reflect into the other array.
*/
// let arr3 = arr1
// arr1.push("swati")
// console.log(arr3)

/**
 * To avoide the changes which is made in the one array it will also going to 
reflect into the other array we can use spread operator.(spread operator)
 */
let arr3 = [...arr1]
arr1.push("swati")
console.log(arr3)

/**
 * spread operator can also be used to combine the objects to form the one 
 * object.
 */
let obj1 = {x:1, y:2}
let obj2 = {z:3, k:5}

let obj3 = {...obj1, ...obj2 }
console.log(obj3)

/**
 * whenever we needed to pass the multiple argument to the function we 
 * can use the spread operator
 */
function sum(x, y, z){
    console.log(x+y+z)
}
let num1 = [1, 2, 3, 4, 5]
sum(...num1)

