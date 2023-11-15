let person = {
    name : "Shiv",
    age : 25,
    greet : function(){console.log("hello from object literal")}
}

//access the property
console.log(person.name)
console.log(person["name"])
person.greet()

//Nested object
let student = {
    name: "Jatadhari",
    marks : {
        science : 93,
        maths : 88 
    }
}

console.log(student.marks.science)
console.log(student["marks"]["science"])