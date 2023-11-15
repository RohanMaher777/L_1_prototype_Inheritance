let myObj = {
    prop_one : 20,
    prop_two : 50
}

let descriptor = Object.getOwnPropertyDescriptors(myObj)
console.log(descriptor)

// get Property Descriptor of myObj object 
let descriptor2 = Object.getOwnPropertyDescriptor(myObj , 'prop_one')
console.log(descriptor2)

// Modify the writable 
Object.defineProperty(myObj, "prop_one", {writable : false})
myObj.prop_one = 60
descriptor2 = Object.getOwnPropertyDescriptor(myObj , 'prop_one')
console.log(descriptor2) 

// Modify the enumeralbe 
console.log(Object.keys(myObj))
Object.defineProperty(myObj, "prop_one", {enumerable : false})
descriptor2 = Object.getOwnPropertyDescriptor(myObj , 'prop_one')
console.log(Object.keys(myObj))
console.log(descriptor2)

// set configurable descriptor to false 
Object.defineProperty(myObj, "prop_three", {
    value : 7,
    writable : false,
    enumerable : true,
    configurable : true
})

descriptor2 = Object.getOwnPropertyDescriptor(myObj, "prop_three")
console.log(descriptor2)
 Object.defineProperty(myObj, "prop_three", {writable : true})// error => when configurable is false

descriptor2 = Object.getOwnPropertyDescriptor(myObj, "prop_three")
console.log(descriptor2)
