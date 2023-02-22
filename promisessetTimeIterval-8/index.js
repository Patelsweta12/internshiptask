alert("hello")
let a = setTimeout((a, b, c) => {
    (alert(a + b + c));
}, 1000, 5, 3, 2)  //10
// clearTimeout(a);



//settimeout

let b = setTimeout((...b) => {
    let sum = 0;
    for (const iterator of b) {
        sum += iterator
    };
    alert(sum);
}, 2000, 5, 3, 2, 10)   //20 

// setTime interval
let clear = setInterval((a, b, c) => { alert(Math.max(a, b, c)) }, 4000, 3, 5, 2);

clearInterval(clear);

//Promises
let num1 = 55;
let promisepract = new Promise(function (resolve, reject) {
    console.log("fetching data");
    setTimeout(() => {

        if (num1 > 50) {
            resolve("value greater than 50")

        } else {
            reject("valuse less then 50")

        }
    }, 2000);
});
console.log(promisepract);





function proms(complete) {
    
    return new Promise ((resolve, reject)=> {
        console.log("fetching data");
        setTimeout(() => {
            if (complete > 50) {
                resolve("value greater than 50")
    
            } else {
                reject("valuse less then 50")
    
            }
            
        }, 300);
    })
    
}
proms(90).then(result=>console.log(result)).catch(error=> console.log(error) );
    




