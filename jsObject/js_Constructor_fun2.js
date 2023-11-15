/* In constructor function, we can add the properties and method to the 
instance of that constructor function.
*/

function Person (name) {
    this.name = name 
}

let person1 = new Person("Narayan")
person1.age = 25

let person2 = new Person("pinakin")

console.log(person1.age)
console.log(person2)