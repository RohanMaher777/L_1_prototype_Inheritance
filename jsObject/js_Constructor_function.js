function Person () {
    this.name = "lalataksha",
    this.age = 25
    this.greet = function(){
        console.log("Hello from constructor function")
    }
}

let person1 =new Person();

console.log(person1.name)
console.log(person1.age)
person1.greet()