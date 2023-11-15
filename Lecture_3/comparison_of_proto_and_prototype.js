function Person(name1, age){
    this.name1 = name1
    this.age = age
    this.getName = function(){
        console.log(`hello ${this.name1}`)
    }
}

let person1 = new Person("Shambhu", 25)

person1.getName()
console.log(person1.__proto__ === Person.prototype)
console.log(Person.__proto__ === Function.prototype)
console.log(Person.__proto__.__proto__ === Object.prototype);
console.log(Person.__proto__.__proto__.__proto__ === Object.__proto__);
console.log(Person.__proto__.__proto__ === Function.__proto__.__proto__);
console.log(Object.__proto__);
console.log(Object.__proto__.__proto__);
console.log(Object.__proto__.__proto__.__proto__);
console.log(Person.__proto__ === Function.prototype);
console.log(Person.__proto__.__proto__ === Object.prototype);
