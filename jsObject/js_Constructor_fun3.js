/*Adding property and attributes to the object of the 
constructor function 
*/

function Person(){
    this.name = 'dhara'
}

let person1 = new Person()
let person2 = new Person()
person1.age = 25
person1.greet = function(){
    console.log(`hello from person1`)
}

console.log(person2.age) // undefined 
console.log(person1.age)// 25
person1.greet() // hello from person1
person2.greet() // error (person2.greet is not a function)
