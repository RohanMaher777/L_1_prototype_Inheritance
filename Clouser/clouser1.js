function greet(){
    let name = "sringi"
    function displayName(){
        return "Hi" + " " + name
    }
    return displayName
}

let g1 = greet()

console.log(g1);
console.log(g1());