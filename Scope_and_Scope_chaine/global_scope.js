let global = "Avi"

function func1 (){
    return global
}

function func2 (){
    return func1()
}

console.log(func2())