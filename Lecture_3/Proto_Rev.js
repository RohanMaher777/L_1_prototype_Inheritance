//Object Literal 
let student = {
    name1 : "Gajraj"
}

console.log(student.prototype);
console.log(student.__proto__)
console.log(student.name1);

//Constructor function 
function Person (name, age){
    this.name = name,
    this.age = age 
}

let person1 = new Person("Hari", 25)

console.log(person1.prototype)
console.log(person1.__proto__)
console.log(person1)

/**
 * prototype is the property of Function object. 
 * It is the prototype of object constructed by that function. 
 * Here object person1 is constructed by function Person. 
 * So Person will have prototype property but not person1. 
 * person1.__proto__ will access the prototype property of Person.
 * 
 * 
 * __proto__ is an internal property of an object, pointing to its
 * prototype.
 */
