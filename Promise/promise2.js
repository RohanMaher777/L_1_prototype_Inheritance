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

// Promise.any([asyncCallWithPromise1(), asyncCallWithPromise2()])
// .then((values)=> console.log(values))
// .catch((error) => console.log(error))

// Promise.all([asyncCallWithPromise1(), asyncCallWithPromise2()])
// .then((values)=> console.log(values))
// .catch((error) => console.log(error))

// Promise.allSettled([asyncCallWithPromise1(), asyncCallWithPromise2()])
// .then((values)=> console.log(values))
// .catch((error) => console.log(error))

Promise.race([asyncCallWithPromise1(), asyncCallWithPromise2()])
.then((values)=> console.log(values))
.catch((error) => console.log(error))