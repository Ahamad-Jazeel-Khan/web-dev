console.log('This is promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }

    else {
        setTimeout(() => {
            console.log("Yes i am done");
            resolve("harry")
        }, 1000);

    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2 ")
    }

    else {
        setTimeout(() => {
            console.log("Yes i am done 2 ");
            resolve("harry 2 ")
        }, 1000);

    }
})

let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 3 ")
    }

    else {
        setTimeout(() => {
            console.log("Yes i am done 3 ");
            resolve("harry 3 ")
        }, 1000);

    }
})

let prom4 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 4 ")
    }

    else {
        setTimeout(() => {
            console.log("Yes i am done 4 ");
            resolve("harry 4 ")
        }, 1000);

    }
})

let prom5 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 5 ")
    }

    else {
        setTimeout(() => {
            console.log("Yes i am done 5 ");
            resolve("harry 5 ")
        }, 1000);

    }
})

let p3 = Promise.all([prom1 , prom2 , prom3 , prom4 , prom5])
 p3.then((a) =>{
    console.log(a)
 }).catch (err => {
   console.log(err)
 })
 