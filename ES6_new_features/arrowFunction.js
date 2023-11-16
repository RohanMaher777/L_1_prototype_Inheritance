let x = function(y, z){
    return y*z
}
console.log(x(7,3))

x= (y, z) =>y*z
console.log(x(9,7))

let sum = (a, b) => {
    let res = a+b
    return res
}

console.log(sum(2,5))

let age =5
let welcome = 
age<18 ? () => {console.log("under Age")} : () =>{console.log("Adult");}

welcome()
