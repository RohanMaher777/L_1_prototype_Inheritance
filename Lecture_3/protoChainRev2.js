function Person(){
     this.name1 = "Satkoti"
}

Person.prototype.name1 = "Bhang"

let person1 = new Person()

Person.__proto__.__proto__.age = 20 // [[Prototype]] of JS Object
Person.__proto__.age = 21 // [[Prototype]] of JS Function

console.log(person1.name1)
console.log(person1.age)

Person.prototype.age = 23
console.log(Person.prototype)
console.log(person1.__proto__)
console.log(Person.__proto__)

console.log(person1.__proto__)
console.log(person1.__proto__.__proto__)
console.log(person1.__proto__.__proto__.__proto__)


/**
 * priority for looking for property or method in the constructor function
 * 
 * 1. Constructor Function Person
 * 2. [[Prototype]] of Person
 * 3. JS Object [[Prototype]]
 * 
 * 
 * Hierarchy of constructor function 
 * 
 *   JS Object
 *      |
 *   JS Function 
 *      |
 *   user-defined  Constructor function 
 *      |
 *   object of user-defined  Constructor function 
 *
 */
