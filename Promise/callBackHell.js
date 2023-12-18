function apiCall(){
    setTimeout(() =>{
        console.log("Data from API 1")
        setTimeout(() =>{
            console.log("Data from API 2")
            setTimeout(() =>{
                console.log("Data from API 3")
                setTimeout(() =>{
                    console.log("Data from API 4")
                },7000)
            },5000)
        },4000)
    },2000)
}

apiCall()