function Person (name, age) {
    this.name = name
    this.age = age
}

let person1 = new Person("bhola", 25)

console.log(person1.prototype)
console.log(Person.prototype)
Person.prototype.gender = "male"/* here we are adding the gender 
property in the prototype of the Person contructor function  */
console.log(person1.gender)
console.log(Person.prototype)

Person.prototype.greet = function(){
    console.log(`hello ${this.name}`)
}
person1.greet()

Person.prototype = {gender : "unknown"} /* here we are only changing 
the prtotype attribute value for the object that is created after
the changes made, it only affect the next onwords object which will be 
created , it won't be affect the previous object which were created 
before. 
*/
console.log(person1.gender)
let person2 = new Person()
console.log(person2.gender)

Person.prototype.gender = "female" /* this is making the value changed
at the prototypal level of the constructor function */
let person3 = new Person
console.log(person1.gender)
console.log(person3.gender)
console.log(person2.gender)