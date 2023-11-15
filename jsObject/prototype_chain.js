function Person (){
    this.name = "Harihar"
}

Person.prototype.name = "Ansh"
Person.prototype.age = 25

let person1 = new Person()
// console.log(person1.name)
// console.log(person1.age)

// console.log(person1.__proto__)
// console.log(Person.prototype)


console.log(person1.__proto__)
console.log(person1.__proto__.__proto__)
console.log(person1.__proto__.__proto__.__proto__)



/*
(prototype chaining)

*      null 
*       |
*   JS Object
*       |
*    Person
*       |
*    person1
*/