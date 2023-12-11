'use strict'
this.name = "swati"
function greet() {
    console.log(this.name)
}
//greet() // gives undefined

greet.call(this) // gives {name = swati} 

