function asyncCallWithPromise1() {
    let error = false;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!error) resolve("Data from API 1");
        else reject("Error from API 1");
      }, 2000);
    });
}

function asyncCallWithPromise2() {
    let error = false;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!error) resolve("Data from API 2");
        else reject("Error from API 2");
      }, 3000);
    });
}

// Here we are doing the promise chaining and it is the replacement of 
// callBackHell 
asyncCallWithPromise1()
.then((data) => {
    console.log(`Data from first API is ${data}`)
    return asyncCallWithPromise2()
}).then((data) => {
    console.log(`Data from second API is ${data}`)
}).catch((error) => {
    console.log(`Error is ${error}`)
})