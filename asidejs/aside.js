let subject = [
    {"name": "HTML", "address":"https://www.w3schools.com/html/"},
    {"name": "CSS", "address":"https://www.w3schools.com/css/default.asp"},
    {"name": "javascript", "address":"https://www.w3schools.com/js/default.asp"}
];
let aside = document.createElement("aside");
console.log(aside);
let nav = document.createElement("nav");
aside.appendChild(nav);

function asidelist(a,d) {
    let ul = document.createElement("ul");
    nav.appendChild(ul);
     for (const iterator of d) {
        let li = document.createElement("li");
        ul.appendChild(li);
        let a = document.createElement("a");
        li.appendChild(a);
        let text = document.createTextNode(iterator.name);
        a.appendChild(text);
        for (const key in iterator) {
            a.setAttribute("href",iterator.address);
           
        }
        
     }

    
}
asidelist(aside,subject);
let body = document.querySelector("body");
body.appendChild(aside);
