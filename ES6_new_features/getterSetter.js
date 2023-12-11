let student = {
    firstName : "Shunya",

    get getName() {
        return this.firstName
    }, 
    set changeName (newName){
        this.firstName = newName
    }
}

console.log(student.firstName)
console.log(student.getName)

student.changeName = "VeerBhadra"
console.log(student.getName)