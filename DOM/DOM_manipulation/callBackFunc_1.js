function greet(name, callback){
     console.log("Jay Jay")
     callback(name)
}
function sayName (name){
    console.log("Shiv" + " " + name)
}

setTimeout(greet, 2000, "Shambhu", sayName)