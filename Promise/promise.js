function apiCall_1(){
    return new Promise((resolve, reject) => {
        resolve(
            setTimeout(() =>{ // executor function
                console.log("Data from API 1")
            },2000)    
        )
        reject(() => {
            console.log("Error from the API 1");
        })
    })
}

function apiCall_2(){
    return new Promise((resolve, reject) => {
        resolve(
            setTimeout(() =>{
                console.log("Data from API 2")
            },3000)    
        )
        reject(() => {
            console.log("Error from the API 2");
        })
    })
}

function apiCall_3(){
    return new Promise((resolve, reject) => {
        resolve(
            setTimeout(() =>{
                console.log("Data from API 3")
            },4000)    
        )
        reject(() => {
            console.log("Error from the API 3");
        })
    })
}

function apiCall_4(){
    return new Promise((resolve, reject) => {
        resolve(
            setTimeout(() =>{
                console.log("Data from API 4")
            },5000)    
        )
        reject(() => {
            console.log("Error from the API 4");
        })
    })
}

let apiCall =() => { // consuming function
    apiCall_1().then(apiCall_2()).then(apiCall_3()).then(apiCall_4())
}

apiCall()