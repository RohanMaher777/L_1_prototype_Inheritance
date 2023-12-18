function apiCall() {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!error) resolve("Data from API 1");
      else reject("Error from API 1");
    }, 2000);
  });
}

let promise = apiCall();

/*
promise.then(
    (res) => {
        console.log(res);
    },
    (err) => {
        console.log(err);
    }
)
*/


promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally((result) => {
    console.log("promise sattled")
  }) 

/*
promise.then(null , (err) =>{
    console.log(err);
})

promise.catch(
    (err) => {
        console.log(err);
    }
)
*/