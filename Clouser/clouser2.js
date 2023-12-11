function calculate(x){
    function multiply(y){
        return x*y
    }
    return multiply
}

let cal1 = calculate(5)
let cal2 = calculate(3)

console.log(cal1);
console.log(cal2())// Nan
console.log(cal1(2)) // 10
console.log(cal2(6)); // 18