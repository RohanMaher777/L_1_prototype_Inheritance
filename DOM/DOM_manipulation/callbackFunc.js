function greet (){
    console.log("Hello from greet")
}

function getInfo() {
    console.log("Calling from getInfo")
}

setTimeout(greet, 2000)
getInfo()
