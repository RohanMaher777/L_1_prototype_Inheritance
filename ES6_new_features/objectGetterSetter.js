let student = {
    firstName : "Shunya",
}
   Object.defineProperty(student, 'getName', {
    get : function (){
        return this.firstName
    }
   })
   Object.defineProperty(student, 'changeName', {
    set : function (newName){
         this.firstName = newName
    }
   })
    


console.log(student.firstName)
console.log(student.getName)

student.changeName = "VeerBhadra"
console.log(student.getName)