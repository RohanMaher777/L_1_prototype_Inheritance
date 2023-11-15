function Person (){
    this.name = "Trishul"
    // this.getName = function(){
    //     console.log("Hello from getName")
    // }
    function getInfo () {
        console.log("Hello from constructor function")
    }
}

let person1 = new Person()

Person.__proto__.getInfo = function(){
    console.log("Hello from first proto")
}

Person.__proto__.__proto__.getInfo = function(){
    console.log("Hello from last proto of getInfo")
}
// Person.__proto__.__proto__.__proto__.getInfo = function(){
//     console.log("Hello from end proto")
// }// we will get error because we can not change object.prototype

Person.__proto__.getName = function(){
    console.log("Hello from first proto of getName")
}

Person.__proto__.__proto__.getName = function(){
    console.log("Hello from last proto of getName")
}

person1.getInfo()
person1.getName()
// console.log(Person.prototype)
