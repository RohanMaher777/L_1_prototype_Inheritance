let global_var = 15

function func(){
    global_var = 9
    let local_var = 3
    let nested_func1 = function (){
        console.log(local_var);
    }
    let nested_func2 = function(){
        console.log(global_var);
    }
    nested_func1()
    nested_func2()
}

function func1 (){
    console.log(global_var);
}

func1() // global_var = 15
func()
//func1()// global_var = 9