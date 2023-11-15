//Object literal property value manuplation 
/*In object literal, when we made any changes in the one object of that
object literal it also reflects to the other objects of the object literal
*/ 

let Person = {
    name1 : "shiva"
}

let person1 = Person
person1.age = 25
console.log(person1.name1)
let person2 = Person
console.log(person2)