
function sum (){
    let a = 0
    function increase_sum(){
        return a = a + 1
    }
    return increase_sum
}

let x = sum()
let a = 5
console.log(x())//1
console.log(x())// 2
console.log(x()) // 3
console.log(a) // 