function Person(name1, age) {
    this.name1 = name1
    this.age = age 
    // this.getName = function(){
    //     console.log(`Hello ${name1}`)
    // }
    function getInfo(){
        console.log(`hello from getInfo`)
    }
}

let person1 = new Person("Anadi", 25)

Person.__proto__.getInfo = function(){
    console.log(`hello from first proto of getInfo`)
}

Person.__proto__.__proto__.getInfo = function(){
    console.log(`hello from last proto of getInfo`)
}

Person.__proto__.getName = function(){
    console.log(`In the first proto of getName`)
}

Person.__proto__.__proto__.getName = function(){
    console.log(`In the first proto of getName`)
}

person1.getName()
person1.getInfo()