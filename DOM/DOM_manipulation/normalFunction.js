function print(name, callback){
    console.log("Hi" + " " + name)
    callback()
}

function callMe(){
    console.log("I am callback function");
}

print("swati", callMe)