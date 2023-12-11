/**
 * In static class method we can not call the class methods by using 
 * the object name(we got error like obj1.getUser is not a function). 
 * we have to call the methods by using the class name directly.
 */
class User {
    // constructor(name1){
    //     this.name1 = name1
    // }
    static getUser(x){
        return "hello" + " " + x
    }
}

// let obj1 = new User("bambam")

//console.log(obj1.getUser("harihar")) // obj1.getUser is not a function

console.log(User.getUser("harihar"))