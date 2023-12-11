
function func(){
    let local_var = 3
     function  nested_func1 (){
        console.log(local_var);
    }
  
    return nested_func1

}

let funcCall = func()
console.log(funcCall)
 //console.log(funcCall());// undefined
funcCall()

