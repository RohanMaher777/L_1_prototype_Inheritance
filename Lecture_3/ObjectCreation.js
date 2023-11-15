let obj = Object.create(Object.prototype = {
    a : { value : 1 , writable : false },
    b: { value : 2, writable : true}
})

console.log(obj); // null => because we have made prototype of obj object
console.log(obj.__proto__) // it is giving the whole prototype of obj object
console.log(obj.__proto__.__proto__); // [Object: null prototype] {} => getting the prototype of javascript object
console.log(obj.__proto__.__proto__.__proto__); // null => windows JS object

let obj1 = {a:1, b:2}
console.log(obj1.__proto__);// [Object: null prototype] {} => it is directly accessing the prototype object
console.log(obj1.__proto__.__proto__); // null => windows JS object