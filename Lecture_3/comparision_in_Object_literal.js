let student = {
    name1 : "shreeji"
}

console.log(student.__proto__);
console.log(student.__proto__.__proto__);
console.log(student.__proto__ === Object.prototype);
console.log(student.name1.__proto__ === String.prototype)

console.log(Number.__proto__ === Function.prototype);
console.log(String.__proto__ === Function.prototype);
console.log(Array.__proto__ === Function.prototype);
console.log(Function.__proto__ === Function.prototype);