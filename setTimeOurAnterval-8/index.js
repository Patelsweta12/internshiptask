alert("hello")
let a = setTimeout((a,b,c)=> {(alert(a+b+c));
} ,1000,5,3,2)  //10
// clearTimeout(a);



//settimeout

let b = setTimeout((...b)=> {
    let sum=0;
    for (const iterator of b) {
    sum+=iterator
};
alert(sum);
} ,2000,5,3,2,10)   //20 

// setTime interval
let clear = setInterval((a,b,c)=> 
{alert(Math.max(a,b,c))},4000,3,5,2);

clearInterval(clear);









