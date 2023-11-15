// Parametrised constructor function 
function Person (name, age, gender) {
    this.name = name,
    this.age = age,
    this.gender = gender
    this.greet = function(){
        return (`Hello ${this.name}`)
    }
}

let person1 =new Person("laltaksha", 25, "male");
let person2 = new Person("Kratika", 23, "female");

console.log(person1.name)
console.log(person2.name)
// console.log(person1.greet()) 
console.log(person2.greet())