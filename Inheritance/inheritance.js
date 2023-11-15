class Person {
    constructor(name){
        this.name = name
        this.occupation ="unemployed"
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

class Student extends Person{
    constructor(name){
        
        console.log(`Hello from Student class`)
        super(name)
        this.occupation = "student"
    }
    greet(){
        console.log(`Hello ${this.name} from student class`)
        console.log("occupation :" + this.occupation)
    }
}

const student1 = new Student("Ashu")
student1.greet()