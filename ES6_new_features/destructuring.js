let person = {
    name: "Raghunandan",
    age : 25,
    gender : "male"
}

// let {name, age , gender} = person
// // console.log(name, age, gender)
// // console.log(person)

//object destructuring with defaulte parameter
let {name, age , occupation = "student"} = person
console.log(name, age, occupation)

let {name :name1, age :age1 , gender :gender1} = person
console.log(name1, age1, gender1);

// Array destructuring 
let arr = ['one', 'two', 'three']
let [x, y, z] = arr
console.log(x, y, z)

//Array destructuring with defaulte parameters 
let arr1 = [10]
let [a=7 , b=9] = arr1
console.log(a, b)

//Swaping of two variable using array destructuring 
let var1 = 5
let var2 = 7

[var1, var2] = [var2, var1]

console.log(var1, var2);  //Cannot access 'var2' before initialization